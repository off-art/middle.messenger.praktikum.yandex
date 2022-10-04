export const tpl = `
        <span class='change-info-line--item'>{{item}}</span>
        <input class='change-info-line--input' id={{id}} value={{info}} type={{type}}
        {{#if required}}
        data-required="{{required}}"
        {{/if}}
        >
        <span class='change-info-line--error'></span>
`;
