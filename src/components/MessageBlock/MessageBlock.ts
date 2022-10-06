import { tpl } from './MessageBlock.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './MessageBlock.less';

type TProps = {
    text: string;
    time: string;
} & TPropsDefault;

export default class MessageBlock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            text: this.props.text,
            time: this.props.time,
        });
    }
}
