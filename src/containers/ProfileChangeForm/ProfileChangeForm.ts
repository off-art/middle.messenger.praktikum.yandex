import { tpl } from './ProfileChangeForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ProfileChangeForm.less';

type TProps = {} & TPropsDefault;

export default class ProfileChangeForm extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
        });
    }
}
