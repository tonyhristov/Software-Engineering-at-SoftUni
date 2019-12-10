export function getPartials() {
   return {
      header: './views/common/header.hbs',
      footer: './views/common/footer.hbs',
   };
}

export function setHeaderInfo(ctx) {
   ctx.isAuth = sessionStorage.getItem('authtoken') !== null;
   ctx.fullName = sessionStorage.getItem('fullName');
}
