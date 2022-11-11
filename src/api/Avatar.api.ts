import { BaseApi, BASE_URL } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const avatarAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

export class AvatarAPI extends BaseApi {
    static change(data: unknown) {
        return avatarAPIInstance
            .put('profile/avatar', {
                credentials: 'include',
                mode: 'cors',
                body: data,
            })
            .then((response) => response);
    }
}
