import tpl from './SignUpPage.hbs';
import Input from '../../components/FormInput/FormInput';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/Wrapper/Wrapper';

const forms = [
    Input({id: 'email', name: 'Почта', type: 'text'}),
    Input({id: 'login', name: 'Логин', type: 'text'}),
    Input({id: 'first_name', name: 'Имя', type: 'text'}),
    Input({id: 'second_name', name: 'Фамилия', type: 'text'}),
    Input({id: 'phone', name: 'Телефон', type: 'tel'}),
    Input({id: 'password', name: 'Пароль', type: 'password'}),
    Input({
        id: 'confirm_password',
        name: 'Пароль (еще раз)',
        type: 'password',
    }),
];

const form = SignForm({
    forms,
    formName: 'Регистрация',
    submitName: 'Зарегистрироваться',
    submitSubName: 'Войти',
    routeSubName: '/',
    id: 'signup',
});

export default props => WrapperCenterPage({children: tpl({form, ...props})});