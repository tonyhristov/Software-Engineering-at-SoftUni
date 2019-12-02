import { get, post, put, del } from '../requester.js';
import { addHeaderInfo, partials } from '../helpers.js';

export function register(ctx, app) {
   addHeaderInfo(ctx);
   partials['registerForm'] = './templates/register/registerForm.hbs';
   app.loadPartials(partials).then(function() {
      this.partial('./templates/register/registerPage.hbs');
   });
}

export function login(ctx, app) {
   addHeaderInfo(ctx);

   partials['loginForm'] = './templates/login/loginForm.hbs';
   app.loadPartials(partials).then(function() {
      this.partial('./templates/login/loginPage.hbs');
   });
}

export function registerProcess(ctx) {
   const { username, password, repeatPassword } = ctx.params;
   if (password === repeatPassword) {
      post('user', '', { username, password }, 'Basic')
         .then(data => {
            ctx.redirect('#/login');
         })
         .catch(console.error);
   }
}

export function loginProcess(ctx) {
   const { username, password } = ctx.params;
   post('user', 'login', { username, password }, 'Basic')
      .then(userInfo => {
         sessionStorage.setItem('userId', userInfo._id);
         sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
         sessionStorage.setItem('username', userInfo.username);
         ctx.redirect('#/');
      })
      .catch(console.error);
}

export function logout(ctx) {
   sessionStorage.clear();
   ctx.redirect('#/');
}
