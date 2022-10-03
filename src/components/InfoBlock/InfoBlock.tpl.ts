export const tpl = `
<div class='info-block'>
    {{#if info}}
        <span class='info-block--item'>{{item}}</span>
        <span class='info-block--info'>{{info}}</span>
    {{else}}
        <button
                class='info-block--btn {{classNames}}'
                onclick={{onClick}}
        >{{item}}</button>
    {{/if}}
</div>`;
