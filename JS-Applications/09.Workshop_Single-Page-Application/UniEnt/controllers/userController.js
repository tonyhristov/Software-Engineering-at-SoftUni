import { getTemplate, saveAndRedirect } from '../helpers/helper.js';
import { checkContext } from '../helpers/helper.js';
import { register, logout, login } from '../models/userModel.js';
import { removeUser } from '../helpers/storage.js';
import { getAllEvents } from '../models/eventModel.js';

export function getLogin(context) {
   getTemplate('users/login.hbs', context);
}

export function getRegister(context) {
   getTemplate('users/register.hbs', context);
}

export function postRegister(context) {
   if (context.params.password !== context.params.rePassword) {
      alert('Passwords does not match!');
      throw new Error('Passwords does not match!');
   }

   console.log(context);

   let data = {
      username: context.params.username,
      password: context.params.password,
   };

   register(data)
      .then(saveAndRedirect.bind(undefined, context, '#/home'))
      .catch(console.log);
}

export function logoutUser(context) {
   logout().then(function() {
      removeUser();
      context.redirect('#/home');
   });
}

export function postLogin(context) {
   login(context.params)
      .then(saveAndRedirect.bind(undefined, context, '#/home'))
      .catch(console.log);
}

export async function getProfile(context) {
   let newContext = checkContext(context);

   try {
      let events = await getAllEvents();
      let myEvents = events.filter(e => e.organizer === newContext.username);

      newContext.events = myEvents;
      newContext.numberOfEvents = myEvents.length;
   } catch (err) {
      console.log(err);
   }

   getTemplate('users/profile.hbs', newContext);
}
