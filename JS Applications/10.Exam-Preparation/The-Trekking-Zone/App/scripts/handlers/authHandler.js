import { get, post } from '../requester.js';
import { getPartials, setHeaderInfo } from '../shared.js';

// Register
export function getRegister(ctx) {
   setHeaderInfo(ctx);
   this.loadPartials(getPartials()).partial('../views/auth/register.hbs');
}
export function postRegister(ctx) {
   const { username, password, rePassword } = ctx.params;
   console.log(ctx.params);

   if (username && password && password === rePassword) {
      post('user', '', { username, password }, 'Basic')
         .then(userInfo => {
            saveAuthInfo(userInfo);
            ctx.redirect('/');
         })
         .catch(console.error);
   }
}

// Login
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

// Logout
export function getLogout(ctx) {
   post('user', '_logout', {}, 'Kinvey')
      .then(() => {
         sessionStorage.clear();
         ctx.redirect('/');
      })
      .catch(console.error());
}

// Profile
export function getProfile(ctx) {
   setHeaderInfo(ctx);

   get('appdata', 'treks', 'Kinvey').then(treks => {
      ctx.treks = treks.filter(t => t.organizer === ctx.username);
      ctx.numberOfTreks = ctx.treks.length;
      this.loadPartials(getPartials()).partial('./views/auth/profile.hbs');
   });
}

function saveAuthInfo(userInfo) {
   sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
   sessionStorage.setItem('username', `${userInfo.username}`);
   sessionStorage.setItem('userId', userInfo._id);
}
