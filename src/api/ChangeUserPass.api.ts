import { BaseApi, BASE_URL } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const changeUserPwdAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

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
