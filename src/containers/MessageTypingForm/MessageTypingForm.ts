import { tpl } from './MessageTypingForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './MessageTypingForm.less';

type TProps = {} & TPropsDefault;

export default class MessageTypingForm extends Block<TProps> {
    render() {
        return this.compile(tpl, {});
    }
}
