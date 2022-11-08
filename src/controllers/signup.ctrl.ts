import { SignUpAPI } from '../api/SignUp.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import store from '../utils/store';

const router = new Router('root');

interface RegFormModel {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
}

export class UserSignUpController {
    static registration(data: RegFormModel) {
        SignUpAPI.create(data).then((response: any) => {
            if (response.status === 200) {
                UserAPI.request().then((responseData: any) => {
                    if (responseData.status === 200) {
                        store.set('user', JSON.parse(responseData.responseText));
                        router.go('/messenger');
                    } else {
                        window.alert('Ошибка запроса данных пользователя');
                    }
                });
            } else {
                window.alert('Ошибка регистрации');
            }
        });
    }
}
