import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const changeUserInfoAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class ChangeUserInfoAPI extends BaseAPI {
    static change(data: any) {
        return changeUserInfoAPIInstance
            .put('profile', {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response);
    }
}
