export const tpl = `<div class='profile'>
    <div class='profile--logo'>
        <div class='profile--img'>img</div>
        <div class='profile--name'>Иван</div>
    </div>
    <div class='profile--data'>
        {{#each profileData}}
            {{{this}}}
        {{/each}}
    </div>
    <div class='profile--settings'>
        {{#each settingsData}}
            {{{this}}}
        {{/each}}
    </div>
</div>`;
