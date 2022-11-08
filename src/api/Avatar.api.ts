import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const avatarAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class AvatarAPI extends BaseAPI {
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
