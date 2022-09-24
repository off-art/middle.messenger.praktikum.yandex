import tpl from './LoginPage.hbs';
import Input from '../../components/FormInput/FormInput';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/Wrapper/Wrapper';

const forms = [
    Input({id: 'login', name: 'Логин', type: 'text'}),
    Input({id: 'password', name: 'Пароль', type: 'password'}),
];

const form = SignForm({
    forms,
    formName: 'Вход',
    submitName: 'Авторизоваться',
    submitSubName: 'Нет аккаунта?',
    routeSubName: '/signup',
    id: 'login',
});

export default props =>
    WrapperCenterPage({children: tpl({form, ...props})});