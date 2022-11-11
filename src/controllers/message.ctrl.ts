import { ChatMessagesAPI } from '../api/Message.api';
import store from '../utils/store';

export class ChatController {
    static parseError = 'Ошибка извлечения данных';

    static createSessionsMessage(chatId: any, userId: any) {
        ChatMessagesAPI.request(chatId)
            .then((response: any) => {
                let tokenChat;
                try {
                    tokenChat = JSON.parse(response.responseText).token;
                } catch {
                    window.alert(this.parseError);
                }
                if (tokenChat) {
                    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenChat}`);

                    socket.addEventListener('open', () => {
                        console.log('connect to ws');
                    });

                    socket.addEventListener('close', (event) => {
                        if (event.wasClean) {
                            console.log('connect was clean close');
                        } else {
                            console.log('disconnect');
                        }
                        console.log(`Code: ${event.code}. Reason: ${event.reason}`);
                    });

                    socket.addEventListener('message', (event) => {
                        let eventJson;
                        try {
                            eventJson = JSON.parse(event.data);
                        } catch {
                            window.alert(this.parseError);
                        }
                        if (Array.isArray(eventJson)) {
                            store.set('messages', eventJson.reverse());
                        } else if (eventJson.type === 'message') {
                            store.set('messages', [...store.getState().messages, eventJson]);
                        }
                        const elem = document.querySelector('.chats-messages--body>div');
                        if (!elem) return;
                        elem.scrollIntoView({
                            behavior: 'smooth' || 'auto',
                            block: 'end',
                        });
                    });

                    socket.addEventListener('error', (event: any) => {
                        console.log('Mistake', event.message);
                    });

                    store.set('active.socket', socket);
                    socket.onopen = () =>
                        socket.send(
                            JSON.stringify({
                                content: '0',
                                type: 'get old',
                            }),
                        );
                } else {
                    console.error('Token chat was not found!');
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }

    static sendMessage(message: string) {
        store.getState().active.socket.send(
            JSON.stringify({
                content: message,
                type: 'message',
            }),
        );
    }
}
