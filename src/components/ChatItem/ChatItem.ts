import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import { tpl } from './ChatItem.tpl';

import './ChatItem.less';

type TProps = {
    name: string;
    message: string;
    time: string;
} & TPropsDefault;

export default class ChatItem extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            message: this.props.message,
            time: this.props.time,
            newMessages: this.props.newMessages,
            logo: this.props.logo,
        });
    }
}
