import { SignUpAPI } from '../api/SignUp.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import store from '../utils/store';
import { RegFormModel } from '../utils/Interfaces';

const router = new Router('root');

export class UserSignUpController {
    static parseError = 'Ошибка извлечения данных';

    static tryCatchParse(response: string, errorMessage: string) {
        try {
            return JSON.parse(response);
        } catch {
            window.alert(errorMessage);
            return {};
        }
    }

    static registration(data: RegFormModel) {
        SignUpAPI.create(data)
            .then((response: any) => {
                if (response.status === 200) {
                    UserAPI.request()
                        .then((responseData: any) => {
                            if (responseData.status === 200) {
                                try {
                                    store.set('user', JSON.parse(responseData.responseText));
                                } catch {
                                    window.alert('Ошибка извлечения данных');
                                }
                                router.go('/messenger');
                            } else {
                                window.alert(this.tryCatchParse(response.response, this.parseError).reason);
                            }
                        })
                        .catch((error: any) => {
                            window.alert(error.reason || 'Ошибка ответа от сервера');
                        });
                } else {
                    window.alert(this.tryCatchParse(response.response, this.parseError).reason);
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }
}
