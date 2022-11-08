import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const changeUserPwdAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class ChangeUserPwdAPI extends BaseAPI {
    static change(data: unknown) {
        return changeUserPwdAPIInstance
            .put('password', {
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
