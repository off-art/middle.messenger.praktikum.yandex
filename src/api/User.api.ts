import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const userInfoAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class UserAPI extends BaseAPI {
    static request() {
        return userInfoAPIInstance.get('user', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
        });
    }
}
