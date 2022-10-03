import { tpl } from './ProfileForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ProfileForm.less';

type TProps = {} & TPropsDefault;

export default class ProfileForm extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
            settingsData: this.props.settingsData,
        });
    }
}
