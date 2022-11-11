export const tpl = `<div class='profile'>
    <div class='profile--logo'>
        {{{avatar}}}
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
