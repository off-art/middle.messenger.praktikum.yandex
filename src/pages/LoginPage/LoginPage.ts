import FormInput from '../../components/FormInput/FormInput';
import SignForm from '../../containers/SignForm/SignForm';
import Wrapper from '../../layout/Wrapper/Wrapper';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';

const validation = new Validation();

const templateForm = [
    { id: 'login', name: 'Логин', type: 'text' },
    { id: 'password', name: 'Пароль', type: 'password' },
];

const forms = templateForm.map(
    (el) =>
        new FormInput({
            ...el,
            required: true,
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
                    if (target.id === 'password') {
                        if (!validation.password(target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const LoginPage = new Wrapper({
    children: new SignForm({
        forms,
        formName: 'Вход',
        submitName: 'Авторизоваться',
        submitSubName: 'Нет аккаунта?',
        routeSubName: '/signup',
        id: 'login',
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
                    console.log(data);
                }
            },
        },
    }),
});

export default LoginPage;
