import { BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const chatMessagesAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats/token');

export class ChatMessagesAPI extends BaseApi {
    static request(id: string) {
        return chatMessagesAPIInstance.post(`/${id}`, {
            credentials: 'include',
            mode: 'cors',
        });
    }
}
