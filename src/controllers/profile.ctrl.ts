import { UserAPI } from '../api/User.api';
import { LogOutAPI } from '../api/Logout.api';
import store from '../utils/store';
import Router from '../utils/Router';
import { AvatarAPI } from '../api/Avatar.api';
import { ChangeUserInfoAPI } from '../api/ChangeUserInfo.api';
import { ChangeUserPwdAPI } from '../api/ChangeUserPass.api';

const router = new Router('root');

export class UserController {
    static getUser() {
        UserAPI.request().then((data: any) => {
            store.set('user', JSON.parse(data.responseText));
        });
    }

    static logoutUser() {
        LogOutAPI.request().then(() => {
            router.go('/');
        });
    }

    static changeUserAvatar(data: any) {
        AvatarAPI.change(data).then((response: any) => {
            if (response.status === 200) {
                this.getUser();
            }
        });
    }

    static changeUserProfileData(data: any) {
        ChangeUserInfoAPI.change(data).then((response: any) => {
            if (response.status === 200) {
                this.getUser();
                router.go('/profile');
            }
        });
    }

    static changeUserPassword(data: any) {
        ChangeUserPwdAPI.change(data).then((response: any) => {
            if (response.status === 200) {
                router.go('/profile');
            }
        });
    }
}
