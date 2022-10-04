export const tpl = `<form class='sign-form' onsubmit={{onSubmit}} id={{id}}'>
<div class='sign-form--header'>{{formName}}</div>
<div class='sign-form--items'>
    {{#each forms}}
        {{{this}}}
    {{/each}}
</div>
<div class='sign-form--submit'>
    <input
            type='submit'
            value={{submitName}}
            class='sign-form--submit-input'
    />
    <a href={{routeSubName}}>{{submitSubName}}</a>
</div>
</form>`;
