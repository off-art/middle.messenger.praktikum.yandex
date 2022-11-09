import render from './renderDOM';
import Block from './Block';
import { TPropsDefault } from './Interfaces';

function isEqual(lhs: string, rhs: string) {
    return lhs === rhs;
}

interface IProps {
    rootQuery: string;
}

export default class Route {
    private _pathname: string;

    private _blockClass: Block<TPropsDefault>;

    private _block: Block<TPropsDefault> | null;

    private _props: object;

    constructor(pathname: string, view: Block<TPropsDefault>, props: IProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            // @ts-ignore
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = this._blockClass;
            // @ts-ignore
            render(this._props.rootQuery, this._block);
            return;
        }
        render('root', this._block);
        this._block.show();
    }
}
