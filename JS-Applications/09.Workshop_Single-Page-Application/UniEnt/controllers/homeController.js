import { getTemplate, checkContext } from '../helpers/helper.js';
import { getAllEvents } from '../models/eventModel.js';

export async function getHome(context) {
   let newContext = checkContext(context);
   try {
      let events = await getAllEvents();

      newContext.events = events;
   } catch (err) {
      console.log(err);
   }

   getTemplate('home.hbs', newContext);
}
