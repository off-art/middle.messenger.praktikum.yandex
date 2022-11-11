import { tpl } from './ProfileForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ProfileForm.less';

type TProps = {
    profileData: any;
    settingsData: any;
    avatar: any;
} & TPropsDefault;

export default class ProfileForm extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            avatar: this.props.avatar,
            profileData: this.props.profileData,
            settingsData: this.props.settingsData,
        });
    }
}
