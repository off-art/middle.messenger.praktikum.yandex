import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const signupAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class SignUpAPI extends BaseAPI {
    static create(data: unknown) {
        return signupAPIInstance.post('signup', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}
