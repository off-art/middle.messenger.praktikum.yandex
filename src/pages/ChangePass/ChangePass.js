import tpl from './ChangePass.hbs';
import InfoLine from '../../components/InfoBlock/InfoBlock';
import WrapperCenterPage from '../../layout/Wrapper/Wrapper';

import './ChangePass.less';

const profileData = [
    InfoLine({
        item: 'Старый пароль',
        info: '.........',
        id: 'oldPassword',
    }),
    InfoLine({item: 'Новый пароль', info: '............', id: 'newPassword'}),
    InfoLine({
        item: 'Повторите новый пароль',
        info: '............',
        id: 'confirmNewPassword',
    }),
];

export default props =>
    WrapperCenterPage({
        children: tpl({profileData, ...props}),
    });