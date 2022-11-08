import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const chatMessagesAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats/token');

export class ChatMessagesAPI extends BaseAPI {
    static request(id: string) {
        return chatMessagesAPIInstance.post(`/${id}`, {
            credentials: 'include',
            mode: 'cors',
        });
    }
}
