import Wrapper from '../../layout/Wrapper/Wrapper';
import Validation from '../../utils/Validation';
import ChangeInfoBlock from '../../components/ChangeInfoBlock/ChangeInfoBlock';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import { ITempObj } from '../../utils/Interfaces';

const validation = new Validation();

const templateData = [
    {
        item: 'Старый пароль',
        info: '.........',
        id: 'oldPassword',
    },
    { item: 'Новый пароль', info: '............', id: 'newPassword' },
    {
        item: 'Повторите новый пароль',
        info: '............',
        id: 'confirmNewPassword',
    },
];

const profileData = templateData.map(
    (el) =>
        new ChangeInfoBlock({
            ...el,
            className: 'change-info-block',
            required: true,
            type: 'password',
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
                        data[current.id] = current.value;
                    });
                }
            },
        },
    }),
});

export default PasswordChangePage;
