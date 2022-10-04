import FormInput from '../../components/FormInput/FormInput';
import SignForm from '../../containers/SignForm/SignForm';
import Wrapper from '../../layout/Wrapper/Wrapper';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';

const validation = new Validation();

const templateForm = [
    { id: 'email', name: 'Почта', type: 'text' },
    { id: 'login', name: 'Логин', type: 'text' },
    { id: 'first_name', name: 'Имя', type: 'text' },
    { id: 'second_name', name: 'Фамилия', type: 'text' },
    { id: 'phone', name: 'Телефон', type: 'tel' },
    { id: 'password', name: 'Пароль', type: 'password' },
    { id: 'confirm_password', name: 'Пароль (еще раз)', type: 'password' },
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
                    if (target.id === 'first_name' || target.id === 'second_name') {
                        if (!validation.names(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'confirm_password') {
                        if (!validation.confirmPassword(target, target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const SignUpPage = new Wrapper({
    children: new SignForm({
        forms,
        formName: 'Регистрация',
        submitName: 'Зарегистрироваться',
        submitSubName: 'Войти',
        routeSubName: '/',
        id: 'signup',
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

export default SignUpPage;
