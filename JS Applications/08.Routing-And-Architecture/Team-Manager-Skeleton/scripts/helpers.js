export function addHeaderInfo(ctx) {
   ctx.isAuthor = sessionStorage.getItem('isAuthor');
   ctx.isOnTeam = sessionStorage.getItem('isOnTeam');
   ctx.userId = sessionStorage.getItem('userId');
   ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
   ctx.username = sessionStorage.getItem('username');
}

export let partials = {
   header: './templates/common/header.hbs',
   footer: './templates/common/footer.hbs',
};
