import { tpl } from './MessageTypingForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './MessageTypingForm.less';

export default class MessageTypingForm extends Block<TPropsDefault> {
    render() {
        return this.compile(tpl, {});
    }
}
