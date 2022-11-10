export const tpl = `<div class='chats-wrapper'>
    <div class='chats'>
        <div class='chats-header'>
                <div class="chats-header-btnBlock">
                    <button class="chats-header-btnBlock__addChat" id='chats-header--btn' title='Добавить новый чат'>+</button>
                    <button class="chats-header-btnBlock__profile" id='chats-btn-profile' >Профиль</button>
                </div>
                <input type='text' placeholder='Поиск' />  
        </div>
        <div class='chats-body'>
            {{{chatsData}}}
        </div>
    </div>
    <div class='chats-messages'>
    <div class='chats-messages--hide'>Выберите или создайте чат</div>
        <div class='chats-messages--head'>
            <div class='chats-messages--head-logo'></div>
            <div class='chats-messages--head-name'>{{chatTitle}}</div>
            <div class='chats-messages--head-option'>
           ︙
            <div class='chats-messages--head-option-hide'>
                    <div class='chats-messages--head-option-add'>Добавить пользователя</div>
                    <div class='chats-messages--head-option-delete-user'>Удалить пользователя</div>
            </div>
            </div>
        </div>
        <div class='chats-messages--body'>
            {{{messagesData}}}
        </div>
            {{{messageTyping}}}
    </div>
</div>`;
