import tpl from './ProfilePage.hbs';
import InfoLine from '../../components/InfoBlock/InfoBlock';
import WrapperCenterPage from '../../layout/Wrapper/Wrapper';

import './ProfilePage.less';

const profileData = [
    InfoLine({item: 'Почта', info: 'mail@ya.ru', id: 'email'}),
    InfoLine({item: 'Логин', info: 'login', id: 'login'}),
    InfoLine({item: 'Имя', info: 'Артем', id: 'first_name'}),
    InfoLine({item: 'Фамилия', info: 'Артемов', id: 'last_name'}),
    InfoLine({item: 'Имя в чате', info: 'Artem_1', id: 'display_name'}),
    InfoLine({item: 'Телефон', info: '+7 (777) 777 77 77', id: 'phone'}),
];

const settingsData = [
    InfoLine({
        item: 'Изменить данные', onClick: () => {
        }
    }),
    InfoLine({
        item: 'Изменить пароль', onClick: () => {
        }
    }),
    InfoLine({
        item: 'Выйти', onClick: () => {
        }, classNames: 'red-color'
    }),
];

export default props =>
    WrapperCenterPage({
        children: tpl({profileData, settingsData, ...props}),
    });