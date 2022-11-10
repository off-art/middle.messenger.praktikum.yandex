import { BASE_URL, BaseApi } from './Base.api';
import HTTPTransport from '../utils/HTTPTransport';

const chatMessagesAPIInstance = new HTTPTransport(`${BASE_URL}/chats/token`);

export class ChatMessagesAPI extends BaseApi {
    static request(id: string) {
        return chatMessagesAPIInstance.post(`/${id}`, {
            credentials: 'include',
            mode: 'cors',
        });
    }
}
