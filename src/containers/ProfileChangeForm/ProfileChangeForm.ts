import { tpl } from './ProfileChangeForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ProfileChangeForm.less';

export default class ProfileChangeForm extends Block<TPropsDefault> {
    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
        });
    }
}
