import ChangePass from './pages/ChangePass/ChangePass';
import LoginPage from './pages/LoginPage/LoginPage';
import ChatsPage from './pages/ChatsPages/ChatsPages';
import SignupPage from './pages/SignUpPage/SignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Error500Page from './pages/Error500/Error500';
import ProfileChangePage from './pages/ProfileChangePage/ProfileChangePage';
import Error404Page from './pages/Error404/Error404';
import { LoginController } from './controllers/login.ctrl';
import Router from './utils/Router';

import './style.less';
import './initStyles.less';

const router = new Router('root');

router
    .setUnprotectedPaths(['/', '/signup'])
    .onRoute(LoginController.checkAuth)
    .onNotRoute(LoginController.checkNotAuth)
    .use('/', LoginPage)
    .use('/500', Error500Page)
    .use('/signup', SignupPage)
    .use('/messenger', ChatsPage)
    .use('/profile', ProfilePage)
    .use('/profile-change', ProfileChangePage)
    .use('/password-change', ChangePass)
    .use('*', Error404Page)
    .start();
