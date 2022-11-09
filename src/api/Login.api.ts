import { BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const loginAPITransport = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class LoginAPI extends BaseApi {
    static request(data: unknown) {
        return loginAPITransport.post('signin', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}
