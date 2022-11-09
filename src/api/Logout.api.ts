import { BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const logOutAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class LogOutAPI extends BaseApi {
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
