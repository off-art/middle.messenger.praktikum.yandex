import * as Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import EventBus from './EventBus';
import isArray = Handlebars.Utils.isArray;
import { ITempObj } from './Interfaces';

class Block<TProps> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    private _element: HTMLElement;

    private _meta: { tagName: string; props: object; withInternalID?: boolean };

    public eventBus: Function;

    public children: object;

    public props: TProps;

    public _id: string = '';

    constructor(propsAndChildren: TProps, tagName = 'div') {
        const { children, props } = this._getChildren(propsAndChildren);

        this.children = children;
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };
        this._id = makeUUID();
        this.props = this._makePropsProxy({ ...props, __id: this._id });

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _getChildren(propsAndChildren: TProps) {
        const children: { [key: string]: Block<TProps> } = {};
        const props: ITempObj = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else if (isArray(value) && value[0] instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });
        return { children, props };
    }

    private _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    private _createResources(): void {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init(): void {
        this._createResources();
        this.dispatchComponentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount(): void {
        this.componentDidMount();

        Object.values(this.children).forEach((child) => {
            if (isArray(child)) {
                child.forEach((ch: Block<TProps>) => ch.dispatchComponentDidMount());
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    componentDidMount(): void {}

    dispatchComponentDidMount(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._render();
        }
    }

    componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {
        if (oldProps || newProps) {
            return true;
        }
        return true;
    }

    private _addEvents() {
        const { events = {} }: any = this.props;

        Object.keys(events).forEach((eventName) => {
            if (eventName === 'focus' || eventName === 'blur') {
                const elements = this._element.querySelectorAll('input');
                elements.forEach((item) => {
                    item.addEventListener(eventName, events[eventName]);
                });
            } else {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });
    }

    private _addClassNames() {
        const { className = '' }: any = this.props;
        if (!className) return;
        if (isArray(className)) {
            // @ts-ignore
            className.forEach((el: string) => {
                this._element.classList.add(el);
            });
        } else {
            this._element.classList.add(className as string);
        }
    }

    private _addAttributes() {
        const { attr = {} }: any = this.props;

        Object.keys(attr).forEach((attrName) => {
            this._element.setAttribute(attrName, attr[attrName]);
        });
    }

    private _removeEvents() {
        const { events = {} }: any = this.props;

        Object.keys(events).forEach((eventName) => {
            if (eventName === 'focus' || eventName === 'blur') {
                const elements = this._element.querySelectorAll('input');
                elements.forEach((item) => {
                    item.removeEventListener(eventName, events[eventName]);
                });
            } else {
                this._element.removeEventListener(eventName, events[eventName]);
            }
        });
    }

    setProps = (nextProps: ITempObj) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement {
        return this._element;
    }

    private _render(): void {
        const block = this.render();
        this._removeEvents();
        this._element.innerHTML = '';
        this._element.appendChild(block as Node);
        this._addAttributes();
        this._addEvents();
        this._addClassNames();
    }

    render(): DocumentFragment | null {
        return null;
    }

    getContent() {
        return this.element;
    }

    private _makePropsProxy(props: any): TProps {
        const self = this;

        return new Proxy(props as any, {
            set(target, prop, value) {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU);
                return true;
            },
            get(target, prop: string) {
                if (prop?.indexOf('_') === 0) {
                    throw new Error('Доступ отсутствует!');
                }

                const value = target[prop] as any;
                return typeof value === 'function' ? value.bind(target) : value;
            },
            deleteProperty() {
                throw new Error('Доступ отсутствует!');
            },
        });
    }

    compile(template: string, props: object) {
        const propsAndStubs: { [key: string]: string | Block<TProps> | [] } = {
            ...props,
        };
        Object.entries(this.children).forEach(([key, child]) => {
            if (isArray(child)) {
                propsAndStubs[key] = [];
                child.forEach((ch: Block<TProps>) => {
                    // @ts-ignore
                    propsAndStubs[key].push(`<div data-id="${ch._id}"></div>`);
                });
            } else {
                propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
            }
        });

        const fragment: any = this._createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);
        Object.values(this.children).forEach((child) => {
            if (isArray(child)) {
                child.forEach((ch: Block<TProps>) => {
                    const stub = fragment.content.querySelector(`[data-id="${ch._id}"]`);
                    stub.replaceWith(ch.getContent());
                });
            } else {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
                stub.replaceWith(child.getContent());
            }
        });
        return fragment.content;
    }

    private _createDocumentElement(tagName: string) {
        const element = document.createElement(tagName);
        // @ts-ignore
        if (this.props.settings?.withInternalID) {
            element.setAttribute('data-id', this._id);
        }
        return element;
    }

    show() {
        this._element.style.display = 'block';
    }

    hide() {
        this._element.style.display = 'none';
    }
}

export default Block;
