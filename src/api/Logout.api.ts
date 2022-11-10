import { BASE_URL, BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const logOutAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

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
