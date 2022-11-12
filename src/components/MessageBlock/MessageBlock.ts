import { tpl } from './MessageBlock.tpl';
import Block from '../../utils/Block';
import { IMessage, TPropsDefault } from '../../utils/Interfaces';
import store from '../../utils/store';
import { connect } from '../../utils/highOrderComponents';
import './MessageBlock.less';

const Handlebars = require('handlebars/dist/cjs/handlebars');

type TProps = {
    messages: IMessage[];
} & TPropsDefault;

Handlebars.registerHelper('isAuthor', (value: string) => value === store.getState().user?.id);
Handlebars.registerHelper('getTime', (value: string) => new Date(value).toLocaleTimeString());

class MessageBlock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            messages: this.props.messages,
        });
    }
}

const tempM = [{}];

const MessageWrapState = connect((state) => ({
    messages: state.messages,
}));

const MessageWithState = MessageWrapState(MessageBlock);

const MessageState = new MessageWithState({
    messages: tempM,
});

export default MessageState;
