export const tpl = `
<div class='form-input'>
    <label for={{id}}>{{name}}</label>
    <input type={{type}} id={{id}} />
    {{#if required}}
        data-required="{{required}}"
    {{/if}}/>
    <span class='form-input--error'></span>
</div>`;
