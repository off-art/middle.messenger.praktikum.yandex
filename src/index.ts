import ChangePass from './pages/ChangePass/ChangePass';
import LoginPage from './pages/LoginPage/LoginPage';
import ChatsPage from './pages/ChatsPages/ChatsPages';
import SignupPage from './pages/SignUpPage/SignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Error500Page from './pages/Error500/Error500';
import ProfileChangePage from './pages/ProfileChangePage/ProfileChangePage';
import Error404Page from './pages/Error404/Error404';
import renderDOM from './utils/renderDOM';

import './style.less';
import './initStyles.less';

const path = window.location.pathname;

switch (path) {
case '/':
    renderDOM('root', ChatsPage);
    break;
case '/login':
    renderDOM('root', LoginPage);
    break;
case '/profile':
    renderDOM('root', ProfilePage);
    break;
case '/signup':
    renderDOM('root', SignupPage);
    break;
case '/password-change':
    renderDOM('root', ChangePass);
    break;
case '/profile-change':
    renderDOM('root', ProfileChangePage);
    break;
case '/500':
    renderDOM('root', Error500Page);
    break;
default:
    renderDOM('root', Error404Page);
}
