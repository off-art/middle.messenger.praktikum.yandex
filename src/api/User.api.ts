import { BASE_URL, BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const userInfoAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

export class UserAPI extends BaseApi {
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
