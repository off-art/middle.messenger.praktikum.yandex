import { tpl } from './ChatsPages.tpl';
import MessageBlock from '../../components/MessageBlock/MessageBlock';
import ChatItem from '../../components/ChatItem/ChatItem';
import Validation from '../../utils/Validation';
import Block from '../../utils/Block';
import MessageTypingForm from '../../containers/MessageTypingForm/MessageTypingForm';
import { ITempObj, TPropsDefault } from '../../utils/Interfaces';

import './ChatsPages.less';

const validation = new Validation();
const templateChatData = [
    {
        name: 'Ivan',
        message: 'Hello men',
        time: '14:22',
        newMessages: 3,
        logo: '',
    },
    {
        name: 'Вадим',
        message: 'Круто!',
        time: 'Понедельник',
        newMessages: null,
        logo: '',
    },
    {
        name: 'тет-а-теты',
        message: 'Hello',
        time: '15:59',
        newMessages: 3,
        logo: '',
    },
    {
        name: '1, 2, 3',
        message:
            'Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей!',
        time: 'Среда',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: 1,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: 'Вчера',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Design Destroyer',
        message:
            'В 2008 году художник Jon Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать',
        time: '15:59',
        newMessages: 3,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Day.',
        message:
            'Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир',
        time: '1 Мая 2020',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Стас Рогозин',
        message:
            'Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером.',
        time: '12 Апр 2020',
        newMessages: 5,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: 1,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: 'Вчера',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Design Destroyer',
        message:
            'В 2008 году художник Jon Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать',
        time: '15:59',
        newMessages: 3,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Day.',
        message:
            'Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир',
        time: '1 Мая 2020',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Стас Рогозин',
        message:
            'Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером.',
        time: '12 Апр 2020',
        newMessages: 5,
        logo: '',
    },
];

const chatData = templateChatData.map(
    (el) =>
        new ChatItem({
            ...el,
        }),
);

const templateMessageData = [
    { text: 'Hello World!', time: '15:59', isFromMe: true },
    { text: 'Goodbye world!', time: '15:59' },
    {
        text:
            'С другой стороны консультация с профессионалами из IT требует от нас системного анализа соответствующих условий активизации. Повседневная практика показывает, что реализация намеченного плана развития создаёт предпосылки качественно новых шагов для направлений прогрессивного развития! Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции позволяет оценить значение новых предложений.\n'
            + '\n'
            + 'Равным образом сложившаяся структура организации напрямую зависит от форм воздействия. Задача организации, в особенности же сложившаяся структура организации напрямую зависит от экономической целесообразности принимаемых решений? Равным образом постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности всесторонне сбалансированных нововведений. Задача организации, в особенности же курс на социально-ориентированный национальный проект играет важную роль в формировании направлений прогрессивного развития.',
        time: '15:59',
        isFromMe: true,
    },
    { text: 'Same text here', time: '15:59', isFromMe: true },
    {
        text: 'Значимость этих проблем настолько очевидна, что реализация намеченного плана развития позволяет выполнить важнейшие задания по разработке новых предложений? Значимость этих проблем настолько очевидна, что постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач? Практический опыт показывает, что постоянный количественный рост и сфера нашей активности позволяет выполнить важнейшие задания по разработке системы обучения кадров, соответствующей насущным потребностям. Повседневная практика показывает, что социально-экономическое развитие влечет за собой процесс внедрения и модернизации дальнейших направлений развитая системы массового участия.',
        time: '15:59',
    },
    { text: 'Test text', time: '15:59' },
];

const messageData = templateMessageData.map(
    (el) =>
        new MessageBlock({
            ...el,
            className: el.isFromMe ? ['messageBlock', 'messageBlock-from-me'] : 'messageBlock',
        }),
);

type TProps = {} & TPropsDefault;

class Chats extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chatsData: this.props.chatsData,
            messagesData: this.props.messagesData,
            messageTyping: this.props.messageTyping,
        });
    }
}

const ChatsPage = new Chats({
    chatData,
    messageData,
    messageTyping: new MessageTypingForm(
        {
            className: 'message-typing-form',
            events: {
                submit: (event: Event) => {
                    event.preventDefault();
                    const target = event.target as HTMLFormElement;
                    if (validation.check(target)) {
                        const inputFields = target.querySelectorAll('[data-required=true]');
                        const data: ITempObj = {};
                        inputFields.forEach((current: HTMLInputElement) => {
                            data[current.id] = current.value;
                        });
                        console.log(data);
                    } else {
                        console.log('Введите сообщение');
                    }
                },
            },
        },
        'form',
    ),
});

export default ChatsPage;
