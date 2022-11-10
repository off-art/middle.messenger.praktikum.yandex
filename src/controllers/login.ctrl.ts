import { LoginAPI } from '../api/Login.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import store from '../utils/store';
import { UserChatController } from './chats.ctrl';
import { ILoginFormModel } from '../utils/Interfaces';

const router = new Router('root');

export class LoginController {
    static parseError = 'Ошибка извлечения данных';

    static errorMessage = 'User already in system';

    static tryCatchParse(response: string, errorMessage: string) {
        try {
            return JSON.parse(response);
        } catch {
            window.alert(errorMessage);
            return {};
        }
    }

    static login(data: ILoginFormModel) {
        LoginAPI.request(data)
            .then(async (response: any) => {
                if (response.status === 200) {
                    UserAPI.request()
                        .then((responseData: any) => {
                            if (responseData.status === 200) {
                                store.set('user', this.tryCatchParse(responseData.responseText, this.parseError));
                                UserChatController.getAllChats();
                                router.go('/messenger');
                            } else {
                                window.alert(this.tryCatchParse(response.response, this.parseError).reason);
                            }
                        })
                        .catch((error: any) => {
                            window.alert(error.reason || 'Ошибка ответа от сервера');
                        });
                } else {
                    const { reason } = this.tryCatchParse(response.response, this.parseError);
                    if (reason === this.errorMessage) {
                        router.go('/messenger');
                    } else {
                        window.alert(reason);
                    }
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }

    static checkAuth() {
        UserAPI.request()
            .then((responseData: any) => {
                if (responseData.status === 200) {
                    try {
                        store.set('user', JSON.parse(responseData.responseText));
                    } catch {
                        window.alert('Ошибка извлечения данных');
                    }
                } else {
                    router.go('/');
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }

    static checkNotAuth() {
        UserAPI.request()
            .then((responseData: any) => {
                if (responseData.status === 200) {
                    router.go('/messenger');
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }
}
