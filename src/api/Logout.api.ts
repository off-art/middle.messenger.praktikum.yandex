import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const logOutAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class LogOutAPI extends BaseAPI {
    static request() {
        return logOutAPIInstance.post('logout', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
        });
    }
}
