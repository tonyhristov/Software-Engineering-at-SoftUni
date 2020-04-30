import { get, post } from '../requester.js';
import { displayError, displaySuccess, displayLoading } from '../shared.js';
import { getPartials, setHeaderInfo } from '../shared.js';

// Register
export function getRegister(ctx) {
   setHeaderInfo(ctx);

   displayLoading();

   setTimeout(() => {
      this.loadPartials(getPartials()).partial('../views/auth/register.hbs');
   }, 2000);
}
export function postRegister(ctx) {
   const { username, password, rePassword } = ctx.params;
   console.log(ctx.params);

   if (username && password && password === rePassword) {
      post('user', '', { username, password }, 'Basic')
         .then((userInfo) => {
            saveAuthInfo(userInfo);

            displaySuccess('Successfully Registered!');
            displayLoading();

            setTimeout(() => {
               ctx.redirect('/');
            }, 2000);
         })
         .catch(() => {
            displayError(
               'The Username is already taken! Please retry your request with a different username.'
            );
         });
   }
}

// Login
export function getLogin(ctx) {
   displayLoading();

   setTimeout(() => {
      this.loadPartials(getPartials()).partial('./views/auth/login.hbs');
   }, 2000);
}
export function postLogin(ctx) {
   setHeaderInfo(ctx);

   const { username, password } = ctx.params;

   if ((username, password)) {
      post('user', 'login', { username, password }, 'Basic')
         .then((userInfo) => {
            saveAuthInfo(userInfo);

            displaySuccess('Successfully Logged In!');
            displayLoading();

            setTimeout(() => {
               ctx.redirect('/');
            }, 2000);
         })
         .catch(() => {
            displayError('Wrong Username or Password');
         });
   }
}

// Logout
export function getLogout(ctx) {
   post('user', '_logout', {}, 'Kinvey')
      .then(() => {
         sessionStorage.clear();

         displaySuccess('Logged out successfully!');
         displayLoading();

         setTimeout(() => {
            ctx.redirect('/');
         }, 2000);
      })
      .catch(() => {
         displayError('Something went wrong!');
      });
}

// Profile
export function getProfile(ctx) {
   setHeaderInfo(ctx);

   get('appdata', 'treks', 'Kinvey').then((treks) => {
      ctx.treks = treks.filter((t) => t.organizer === ctx.username);
      ctx.numberOfTreks = ctx.treks.length;

      displayLoading();

      setTimeout(() => {
         this.loadPartials(getPartials()).partial('./views/auth/profile.hbs');
      }, 2000);
   });
}

function saveAuthInfo(userInfo) {
   sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
   sessionStorage.setItem('username', `${userInfo.username}`);
   sessionStorage.setItem('userId', userInfo._id);
}
