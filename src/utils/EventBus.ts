type Listener = (...args: any[]) => void;

export default class EventBus {
    listeners: Record<string, Listener[]>;

    constructor() {
        this.listeners = {};
    }

    public on(event: string, callback: Listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public off(event: string, callback: Listener) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
    }

    public emit(event: string, ...args: any[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}
