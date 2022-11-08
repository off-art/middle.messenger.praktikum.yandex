export const tpl = `
        <span class='change-info-block--item'>{{item}}</span>
        <input class='change-info-block--input' id={{id}} type={{type}}
        {{#if required}}
        data-required="{{required}}"
        {{/if}}
        value={{info}}
        >
        <span class='change-info-block--error'></span>
`;
