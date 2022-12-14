import { tpl } from './ChatsPages.tpl';
import Block from '../../utils/Block';
import MessageTypingForm from '../../containers/MessageTypingForm/MessageTypingForm';
import { TPropsDefault } from '../../utils/Interfaces';

import ChatItemsState from '../../components/ChatItem/ChatItem';

import Router from '../../utils/Router';
import { UserChatController } from '../../controllers/chats.ctrl';
import MessageState from '../../components/MessageBlock/MessageBlock';
import { ChatController } from '../../controllers/message.ctrl';
import { connect } from '../../utils/highOrderComponents';

import './ChatsPages.less';
import store from '../../utils/store';

type TProps = {} & TPropsDefault;

class Chats extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chatsData: this.props.chatsData,
            messagesData: this.props.messagesData,
            messageTyping: this.props.messageTyping,
            chatTitle: this.props.chatTitle,
        });
    }
}

UserChatController.getAllChats();

const ChatsWrapState = connect((state) => ({
    chatTitle: state.active?.chat?.title,
}));

const ChatsWithState = ChatsWrapState(Chats);

const ChatsPage = new ChatsWithState({
    chatsData: ChatItemsState,
    messagesData: MessageState,
    chatTitle: '',
    events: {
        click: (event: Event) => {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            if (target.id === 'chats-btn-profile') {
                const router = new Router('root');
                router.go('/profile');
            }
            if (target.id === 'chats-header--btn') {
                UserChatController.createChat();
            }
            if (target.classList.contains('chats-messages--head-option-delete')) {
                UserChatController.deleteChat();
            }
            if (target.classList.contains('chats-messages--head-option-delete-user')) {
                UserChatController.deleteUserFromChat();
            }
            if (target.classList.contains('chats-messages--head-option-add')) {
                UserChatController.addUserFromChat();
            }
            if (target.classList.contains('chats-header-btnBlock__lope')) {
                const { value } = document.querySelector('.chats-header-btnBlock__input') as HTMLInputElement;
                store.set(
                    'filteredChats',
                    store
                        .getState()
                        .chats.filter((chat: any) => chat.title.toLowerCase().includes(value.toLowerCase())),
                );
            }
        },
    },
    messageTyping: new MessageTypingForm(
        {
            className: 'message-typing-form',
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                    const target = event.target as HTMLFormElement;
                    if (target.classList.contains('message-typing-form-submit')) {
                        const mes = document.getElementById('message') as HTMLInputElement;
                        if (mes.value) {
                            ChatController.sendMessage(mes.value);
                            mes.value = '';
                        }
                    }
                },
            },
        },
        'form',
    ),
});

export default ChatsPage;
