export const tpl = `
{{#each messages}}
    {{#if (isAuthor user_id)}}
    <div class="messageBlock messageBlock-from-me">
    {{else}}
     <div class="messageBlock">
    {{/if}}
    <p>{{content}}<time>{{getTime time}}</time></p>
</div>
{{/each}}
`;
