import { LoginAPI } from '../api/Login.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import store from '../utils/store';
import { UserChatController } from './chats.ctrl';

const router = new Router('root');

interface LoginFormModel {
    login: string;
    password: string;
}

export class LoginController {
    static login(data: LoginFormModel) {
        LoginAPI.request(data).then((response: any) => {
            if (response.status === 200) {
                UserAPI.request().then((responseData: any) => {
                    if (responseData.status === 200) {
                        store.set('user', JSON.parse(responseData.responseText));
                        UserChatController.getAllChats();
                        router.go('/messenger');
                    } else {
                        window.alert('Ошибка авторизации');
                    }
                });
            } else {
                window.alert('Ошибка авторизации');
            }
        });
    }

    static checkAuth() {
        UserAPI.request().then((responseData: any) => {
            if (responseData.status === 200) {
                store.set('user', JSON.parse(responseData.responseText));
            } else {
                router.go('/');
            }
        });
    }

    static checkNotAuth() {
        UserAPI.request().then((responseData: any) => {
            if (responseData.status === 200) {
                router.go('/messenger');
            }
        });
    }
}
