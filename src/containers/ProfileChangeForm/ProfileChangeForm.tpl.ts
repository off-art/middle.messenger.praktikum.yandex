export const tpl = `<form class='profile-change'>
    <div class='profile-change--logo'>
        <div class='profile-change--title'>Редактирование параметров</div>
    </div>
    <div class='profile-change--data'>
        {{#each profileData}}
            {{{this}}}
        {{/each}}
    </div>
    <div class='profile-change--submit'>
        <input
            type='submit'
            value='Сохранить'
        />
    </div>
</form>`;
