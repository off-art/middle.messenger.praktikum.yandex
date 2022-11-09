import { LoginAPI } from '../api/Login.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import store from '../utils/store';
import { UserChatController } from './chats.ctrl';
import { ILoginFormModel } from '../utils/Interfaces';

const router = new Router('root');

export class LoginController {
    static login(data: ILoginFormModel) {
        LoginAPI.request(data).then(async (response: any) => {
            if (response.status === 200) {
                UserAPI.request().then((responseData: any) => {
                    if (responseData.status === 200) {
                        store.set('user', JSON.parse(responseData.responseText));
                        UserChatController.getAllChats();
                        router.go('/messenger');
                    } else {
                        window.alert(JSON.parse(response.response).reason);
                    }
                });
            } else if (JSON.parse(response.response).reason === 'User already in system') {
                router.go('/messenger');
            } else {
                window.alert(JSON.parse(response.response).reason);
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
