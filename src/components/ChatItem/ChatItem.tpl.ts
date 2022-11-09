export const tpl = `
{{#each chats}}
<div class='chat-item' id='{{id}}'>
    <div class='chat-item--logo'>
        <div class='chat-item--logo-img'></div>
    </div>
    <div class='chat-item--body'>
        <div class='chat-item--main'>
            <div class='chat-item--main-name'>{{title}}</div>
            <div class='chat-item--main-time'>{{getTime last_message.time}}</div>
        </div>
        <div class='chat-item--msg'>
            <div class='chat-item--msg-text'>{{last_message.content}}</div>
            <div class='chat-item--msg-new'>
                {{#if unread_count}}
                    <div>{{unread_count}}</div>
                {{/if}}
            </div>
        </div>
    </div>
</div>
{{/each}}
`;
