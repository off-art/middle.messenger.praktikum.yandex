import Wrapper from '../../layout/Wrapper/Wrapper';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import ChangeInfoBlock from '../../components/ChangeInfoBlock/ChangeInfoBlock';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';

import { connect } from '../../utils/highOrderComponents';
import { UserController } from '../../controllers/profile.ctrl';
import Router from '../../utils/Router';

const templateData = [
    {
        item: 'Почта',
        id: 'email',
    },
    {
        item: 'Логин',
        id: 'login',
    },
    {
        item: 'Имя',
        id: 'first_name',
    },
    {
        item: 'Фамилия',
        id: 'second_name',
    },
    {
        item: 'Имя в чате',
        id: 'display_name',
    },
    {
        item: 'Телефон',
        id: 'phone',
    },
];

const validation = new Validation();

const profileData = templateData.map((i) => {
    const A = connect((state) => ({
        ...i,
        required: true,
        className: 'change-info-line',
        type: i.id === 'phone' ? 'tel' : 'text',
        info: state.user?.[i.id],
    }));
    const B = A(ChangeInfoBlock);
    return new B({
        info: '-',
        ...i,
        className: 'change-info-block',
        required: true,
        type: i.id === 'phone' ? 'tel' : 'text',
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
    });
});

const ProfileChangePage = new Wrapper({
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
                        data[current.id] = current.value;
                    });
                    UserController.changeUserProfileData(data);
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

export default ProfileChangePage;
