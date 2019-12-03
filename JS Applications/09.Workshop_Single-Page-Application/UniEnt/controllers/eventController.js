import { getTemplate, checkContext } from '../helpers/helper.js';
import { getData } from '../helpers/storage.js';
import { create, getEvent, edit, close } from '../models/eventModel.js';

export function getCreate(context) {
   let newContext = checkContext(context);
   getTemplate('events/create.hbs', newContext);
}

export function postCreate(context) {
   let data = {
      ...context.params,
      peopleInterestedIn: 0,
      organizer: JSON.parse(getData('userInfo')).username,
   };

   create(data)
      .then(function() {
         context.redirect('#/home');
      })
      .catch(console.log);
}

export async function getDetails(context) {
   let newContext = checkContext(context);
   let event = await getEvent(context.params.id);

   Object.keys(event).forEach(key => {
      newContext[key] = event[key];
   });
   newContext.isOrganizer = newContext.username === event.organizer;

   getTemplate('events/eventDetails.hbs', newContext);
}

export async function getEdit(context) {
   let newContext = checkContext(context);
   let event = await getEvent(context.params.id);

   Object.keys(event).forEach(key => {
      newContext[key] = event[key];
   });

   getTemplate('events/editEvent.hbs', newContext);
}

export function postEdit(context) {
   let newContext = checkContext(context);

   let data = {
      ...context.params,
   };

   delete data.id;

   edit(context.params.id, data).then(function() {
      newContext.redirect(`#/details/${context.params.id}`);
   });
}

export async function closeEvent(context) {
   close(context.params.id).then(function() {
      context.redirect('#/home');
   });
}
