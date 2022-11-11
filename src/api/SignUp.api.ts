import { BASE_URL, BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const signupAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

export class SignUpAPI extends BaseApi {
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
