import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './BaseApi';

const chatAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

type DataUsersType = {
    chatId: number;
    users: number[];
};

export class ChatApi extends BaseAPI {
    static create(data: unknown) {
        return chatAPIInstance.post('', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    static request() {
        return chatAPIInstance.get('', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
        });
    }

    static delete(data: { chatId: number }) {
        return chatAPIInstance.delete('', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    static deleteUsers(data: DataUsersType) {
        return chatAPIInstance.delete('/users', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    static addUsers(data: DataUsersType) {
        return chatAPIInstance.put('/users', {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}
