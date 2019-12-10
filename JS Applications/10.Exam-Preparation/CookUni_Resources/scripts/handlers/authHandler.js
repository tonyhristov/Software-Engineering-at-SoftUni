import { getPartials, setHeaderInfo } from '../shared.js';
import { get, post, put, del } from '../requester.js';

function saveAuthInfo(userInfo) {
   sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
   sessionStorage.setItem(
      'fullName',
      `${userInfo.firstName} ${userInfo.lastName}`
   );
   sessionStorage.setItem('userId', userInfo._id);
}

export function getRegister(ctx) {
   setHeaderInfo(ctx);

   this.loadPartials(getPartials()).partial('./views/auth/register.hbs');
}

export function postRegister(ctx) {
   const {
      firstName,
      lastName,
      username,
      password,
      repeatPassword,
   } = ctx.params;

   if (
      firstName &&
      lastName &&
      username &&
      password &&
      password === repeatPassword
   ) {
      post('user', '', { firstName, lastName, username, password }, 'Basic')
         .then(userInfo => {
            saveAuthInfo(userInfo);
            ctx.redirect('/');
         })
         .catch(console.error);
   }
}

export function getLogin(ctx) {
   this.loadPartials(getPartials()).partial('./views/auth/login.hbs');
}

export function postLogin(ctx) {
   setHeaderInfo(ctx);

   const { username, password } = ctx.params;

   if ((username, password)) {
      post('user', 'login', { username, password }, 'Basic')
         .then(userInfo => {
            saveAuthInfo(userInfo);
            ctx.redirect('/');
         })
         .catch(console.error);
   }
}

export function logout(ctx) {
   post('user', '_logout', {}, 'Kinvey')
      .then(() => {
         sessionStorage.clear();
         ctx.redirect('/');
      })
      .catch(console.error());
}
