import { BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const changeUserPwdAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class ChangeUserPwdAPI extends BaseApi {
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
