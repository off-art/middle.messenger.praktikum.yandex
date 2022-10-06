export const tpl = `<div class='chats-wrapper'>
    <div class='chats'>
        <div class='chats-header'>
            <button>Профиль ></button>
            <input type='text' placeholder='Поиск' />
        </div>
        <div class='chats-body'>
            {{#each chatData}}
                <div class='chats-body--item'>
                    {{{this}}}
                </div>
            {{/each}}
        </div>
    </div>
    <div class='chats-messages'>
        <div class='chats-messages--head'>
            <div class='chats-messages--head-logo'></div>
            <div class='chats-messages--head-name'>Вадим</div>
            <div class='chats-messages--head-option'>⋮</div>
        </div>
        <div class='chats-messages--body'>
            {{#each messageData}}
                {{{this}}}
            {{/each}}
        </div>
            {{{messageTyping}}}
    </div>
</div>`;
