import Wrapper from '../../layout/Wrapper/Wrapper';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import ChangeInfoBlock from '../../components/ChangeInfoBlock/ChangeInfoBlock';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';

const templateData = [
    {
        item: 'Почта',
        info: 'pochta@yandex.ru',
        id: 'email',
    },
    {
        item: 'Логин',
        info: 'ivanivanov',
        id: 'login',
    },
    {
        item: 'Имя',
        info: 'Иван',
        id: 'first_name',
    },
    {
        item: 'Фамилия',
        info: 'Иванов',
        id: 'second_name',
    },
    {
        item: 'Имя в чате',
        info: 'Иван',
        id: 'display_name',
    },
    {
        item: 'Телефон',
        info: '+79099673030',
        id: 'phone',
    },
];

const validation = new Validation();

const profileData = templateData.map(
    (el) =>
        new ChangeInfoBlock({
            ...el,
            className: 'change-info-block',
            required: true,
            type: el.id === 'phone' ? 'tel' : 'text',
            events: {
                focus: (event: Event) => {
                    validation.hideError(event.target as HTMLInputElement);
                },
                blur: (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    if (target.id === 'login') {
                        if (!validation.login(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'email') {
                        if (!validation.email(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'phone') {
                        if (!validation.phone(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'display_name') {
                        if (!validation.checkEmptyValue(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'first_name' || target.id === 'second_name') {
                        if (!validation.names(target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const ProfileChangePage = new Wrapper({
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

export default ProfileChangePage;
