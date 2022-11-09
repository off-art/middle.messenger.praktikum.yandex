import { ITempObj } from './Interfaces';
import { queryStringify } from './helpers';

interface IOptionsTransfer {
    data?: any;
    method: string;
    timeout?: number;
    headers?: { [key: string]: string };
    credentials?: string;
    mode?: string;
    body?: string;
}

export default class HTTPTransport {
    private _instance: string;

    constructor(url: string) {
        this._instance = url;
    }

    METHODS = {
        GET: 'GET',
        PUT: 'PUT',
        POST: 'POST',
        DELETE: 'DELETE',
    };

    queryStringify(data: ITempObj) {
        const keys = Object.keys(data);
        return keys.reduce(
            (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
            '?',
        );
    }

    get = (url: string, options = {}) =>
        this.request(`${this._instance}${url}`, {
            ...options,
            method: this.METHODS.GET,
        } as IOptionsTransfer);

    put = (url: string, options = {}) =>
        this.request(`${this._instance}${url}`, {
            ...options,
            method: this.METHODS.PUT,
        } as IOptionsTransfer);

    post = (url: string, options = {}) =>
        this.request(`${this._instance}${url}`, {
            ...options,
            method: this.METHODS.POST,
        } as IOptionsTransfer);

    delete = (url: string, options = {}) =>
        this.request(`${this._instance}${url}`, {
            ...options,
            method: this.METHODS.DELETE,
        } as IOptionsTransfer);

    request = (url: string, options: IOptionsTransfer = { method: this.METHODS.GET }) =>
        new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.withCredentials = true;

            xhr.open(
                options.method,
                options.method === this.METHODS.GET && !!options.data
                    ? `${url}${queryStringify(options.data as ITempObj)}`
                    : url,
            );
            if (options.headers) {
                Object.keys(options.headers).forEach((key) => {
                    if (options.headers) {
                        xhr.setRequestHeader(key, options.headers[key]);
                    }
                });
            }

            if (options.timeout) {
                xhr.timeout = options.timeout;
            } else {
                xhr.timeout = 5000;
            }

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onerror = reject;

            xhr.ontimeout = reject;

            if (options.method === this.METHODS.GET || !options.body) {
                xhr.send();
            } else {
                xhr.send(options.body);
            }
        });
}
