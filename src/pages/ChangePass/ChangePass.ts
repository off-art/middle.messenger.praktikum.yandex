import Wrapper from '../../layout/Wrapper/Wrapper';
import Validation from '../../utils/Validation';
import ChangeInfoBlock from '../../components/ChangeInfoBlock/ChangeInfoBlock';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import { ITempObj } from '../../utils/Interfaces';
import { UserController } from '../../controllers/profile.ctrl';
import Router from '../../utils/Router';

const validation = new Validation();

const templateData = [
    {
        item: 'Старый пароль',
        id: 'old_password',
    },
    {
        item: 'Новый пароль',
        id: 'password',
    },
    {
        item: 'Повторите новый пароль',
        id: 'confirm_password',
    },
];

const profileData = templateData.map(
    (el) =>
        new ChangeInfoBlock({
            ...el,
            className: 'change-info-block',
            required: true,
            type: 'password',
            info: '',
            events: {
                focus: (event: Event) => {
                    validation.hideError(event.target as HTMLInputElement);
                },
                blur: (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    if (target.id === 'confirm_password') {
                        if (!validation.confirmPassword(target, target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'password') {
                        if (!validation.password(target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const PasswordChangePage = new Wrapper({
    backArrow: true,
    children: new ProfileChangeForm({
        profileData,
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (validation.check(target)) {
                    const inputFields = target.querySelectorAll('[data-required=true]');
                    const data: ITempObj = {};
                    inputFields.forEach((current: HTMLInputElement) => {
                        if (current.id === 'password') {
                            data.newPassword = current.value;
                        } else if (current.id === 'old_password') {
                            data.oldPassword = current.value;
                        }
                    });
                    UserController.changeUserPassword(data);
                }
            },
        },
    }),
    events: {
        click: (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.id === 'back') {
                const router = new Router('root');
                router.back();
            }
        },
    },
});

export default PasswordChangePage;
