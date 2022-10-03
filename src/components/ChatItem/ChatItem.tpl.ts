export const tpl = `<div class='chat-item'>
    <div class='chat-item--logo'>
        <div class='chat-item--logo-img'></div>
    </div>
    <div class='chat-item--body'>
        <div class='chat-item--main'>
            <div class='chat-item--main-name'>{{name}}</div>
            <div class='chat-item--main-time'>{{time}}</div>
        </div>
        <div class='chat-item--msg'>
            <div class='chat-item--msg-text'>{{message}}</div>
            <div class='chat-item--msg-new'>
                {{#if newMessages}}
                    <div>{{newMessages}}</div>
                {{/if}}
            </div>
        </div>
    </div>
</div>`;
