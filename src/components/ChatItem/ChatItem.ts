import { IChat, TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import { tpl } from './ChatItem.tpl';
import { connect } from '../../utils/highOrderComponents';
import { UserChatController } from '../../controllers/chats.ctrl';
import store from '../../utils/store';
import './ChatItem.less';

const Handlebars = require('handlebars/dist/cjs/handlebars');

type TProps = {
    chats: IChat[];
} & TPropsDefault;

Handlebars.registerHelper('getTime', (value: string) => new Date(value).toLocaleTimeString());

class ChatItems extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
        });
    }
}

const tempCI = [{}];

const ChatItemsWrapState = connect((state) => ({
    chats: state.filteredChats,
}));

const ChatItemsWithState = ChatItemsWrapState(ChatItems);

const ChatItemsState = new ChatItemsWithState({
    chats: tempCI,
    events: {
        click: (event: any) => {
            const parent = event.target.closest('.chat-item');
            if (!parent.classList.contains('active')) {
                UserChatController.setActiveChat(parent, store.getState().user.id);
                const mes = document.getElementById('message') as HTMLTextAreaElement;
                mes.value = '';
            }
            const wrapper = event.target.closest('.chats-wrapper');
            if (!wrapper.classList.contains('active')) {
                wrapper.classList.add('active');
            }
        },
    },
});

export default ChatItemsState;
