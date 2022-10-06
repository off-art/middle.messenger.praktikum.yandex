import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Wrapper from '../../layout/Wrapper/Wrapper';
import ProfileForm from '../../containers/ProfileForm/ProfileForm';

const templateProfileData = [
    { item: 'Почта', info: 'mail@ya.ru', id: 'email' },
    { item: 'Логин', info: 'login', id: 'login' },
    { item: 'Имя', info: 'Артем', id: 'first_name' },
    { item: 'Фамилия', info: 'Артемов', id: 'last_name' },
    { item: 'Имя в чате', info: 'Artem_1', id: 'display_name' },
    { item: 'Телефон', info: '+7 (777) 777 77 77', id: 'phone' },
];

const profileData = templateProfileData.map(
    (el) =>
        new InfoBlock({
            ...el,
            className: 'info-block',
        }),
);

const templateSettingsData = [
    { item: 'Изменить данные' },
    { item: 'Изменить пароль' },
    { item: 'Выйти', classNames: 'red-color' },
];

const settingsData = templateSettingsData.map(
    (el) =>
        new InfoBlock({
            ...el,
            className: 'info-block',
        }),
);

const ProfilePage = new Wrapper({
    children: new ProfileForm({ profileData, settingsData }),
});

export default ProfilePage;
