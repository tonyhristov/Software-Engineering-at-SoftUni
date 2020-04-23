import { get, post, put, del } from '../requester.js';
import { displayError, displaySuccess, displayLoading } from '../shared.js';
import { getPartials, setHeaderInfo } from '../shared.js';

// Create
export function getCreate(ctx) {
   setHeaderInfo(ctx);
   this.loadPartials(getPartials()).partial('./views/trek/create.hbs');
}

export function postCreate(ctx) {
   const { location, dateTime, description, imageURL } = ctx.params;

   const trek = {
      location,
      dateTime,
      description,
      imageURL,
      organizer: sessionStorage.getItem('username'),
      likesCounter: 0,
   };
   if (location && dateTime && description && imageURL) {
      post('appdata', 'treks', trek, 'Kinvey')
         .then(() => {
            displaySuccess('Successfully created a trek!');
            displayLoading();

            setTimeout(() => {
               ctx.redirect('/');
            }, 2000);
         })
         .catch(() => {
            displayError('Something went wrong!');
         });
   }
}

// Details
export function getDetails(ctx) {
   setHeaderInfo(ctx);
   const id = ctx.params.id;
   get('appdata', `treks/${id}`, 'Kinvey')
      .then((trek) => {
         trek.isCreator =
            sessionStorage.getItem('userId') === trek._acl.creator;
         ctx.trek = trek;

         displayLoading();

         setTimeout(() => {
            this.loadPartials(getPartials()).partial(
               '../views/trek/details.hbs'
            );
         }, 2000);
      })
      .catch(console.error());
}

// Edit
export function getEdit(ctx) {
   setHeaderInfo(ctx);
   const id = ctx.params.id;

   get('appdata', `treks/${id}`, 'Kinvey')
      .then((trek) => {
         ctx.trek = trek;

         this.loadPartials(getPartials()).partial('../views/trek/edit.hbs');
      })
      .catch(console.error());
}

export function postEdit(ctx) {
   const id = ctx.params.id;
   const {
      location,
      dateTime,
      description,
      imageURL,
      organizer,
      likesCounter,
   } = ctx.params;

   const trek = {
      location,
      dateTime,
      description,
      imageURL,
      organizer,
      likesCounter,
   };
   if (location && dateTime && description && imageURL) {
      put('appdata', `treks/${id}`, trek, 'Kinvey')
         .then(() => {
            displaySuccess('Successfully edited a trek!');
            displayLoading();

            setTimeout(() => {
               ctx.redirect('/');
            }, 2000);
         })
         .catch(console.error);
   }
}

// Delete
export function getDelete(ctx) {
   const id = ctx.params.id;

   del('appdata', `treks/${id}`, 'Kinvey')
      .then(() => {
         displaySuccess('Successfully deleted a trek!');
         displayLoading();

         setTimeout(() => {
            ctx.redirect('/');
         }, 2000);
      })
      .catch(console.error());
}

// Like
export function getLike(ctx) {
   const id = ctx.params.id;

   get('appdata', `treks/${id}`, 'Kinvey')
      .then((trek) => {
         trek.likesCounter++;
         return put('appdata', `treks/${id}`, trek, 'Kinvey');
      })
      .then(() => {
         displaySuccess('You have Liked the trek!');
         displayLoading();

         setTimeout(() => {
            ctx.redirect(`/trek/${id}`);
         }, 2000);
      })
      .catch(console.error());
}
