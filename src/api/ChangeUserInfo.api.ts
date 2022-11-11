import { BaseApi, BASE_URL } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const changeUserInfoAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

export class ChangeUserInfoAPI extends BaseApi {
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
