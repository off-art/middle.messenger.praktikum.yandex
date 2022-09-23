import ErrorPage from './pages/ErrorPage/ErrorPage.js';
import ChangePass from './pages/ChangePass/ChangePass';
import LoginPage from './pages/LoginPage/LoginPage.js';
import ChatsPage from './pages/ChatsPages/ChatsPages.js';
import SignupPage from './pages/SignUpPage/SignUpPage.js';
import ProfilePage from './pages/ProfilePage/ProfilePage.js';
import './style.less';

const path = window.location.pathname;
const root = document.getElementById('root');

switch (path) {
    case '/':
        root.innerHTML = ChatsPage();
        break;
    case '/login':
        root.innerHTML = LoginPage();
        break;
    case '/signup':
        root.innerHTML = SignupPage();
        break;
    case '/profile':
        root.innerHTML = ProfilePage();
        break;
    case '/changepass':
        root.innerHTML = ChangePass();
        break;
    case '/500':
        root.innerHTML = ErrorPage({
            errorNumber: 500,
            errorMessage: 'Мы уже фиксим',
        });
        break;
    default:
        root.innerHTML = ErrorPage({
            errorNumber: 404,
            errorMessage: 'Не туда попали',
        });
}