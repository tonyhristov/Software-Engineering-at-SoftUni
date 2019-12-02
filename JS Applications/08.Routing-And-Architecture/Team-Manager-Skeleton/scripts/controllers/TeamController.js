import { get, post, put, del } from '../requester.js';
import { addHeaderInfo, partials } from '../helpers.js';

export function catalog(ctx, app) {
   addHeaderInfo(ctx);
   partials['team'] = './templates/catalog/team.hbs';
   get('appdata', 'teams', 'Kinvey')
      .then(data => {
         ctx.teams = data;
         app.loadPartials(partials).then(function() {
            this.partial('./templates/catalog/teamCatalog.hbs');
         });
      })
      .catch(console.error);
}

export function create(ctx, app) {
   addHeaderInfo(ctx);

   partials['createForm'] = './templates/create/createForm.hbs';

   app.loadPartials(partials).then(function() {
      this.partial('./templates/create/createPage.hbs');
   });
}

export function createProcess(ctx) {
   const { name, description } = ctx.params;
   const members = [];
   members.push(sessionStorage.getItem('username'));
   post('appdata', 'teams', { name, description, members }, 'Kinvey')
      .then(data => {
         ctx.redirect('#/catalog');
      })
      .catch(console.error());
}

export function details(ctx, app) {
   addHeaderInfo(ctx);
   const id = ctx.params.id;
   partials['teamMember'] = './templates/catalog/teamMember.hbs';
   partials['teamControls'] = './templates/catalog/teamControls.hbs';

   get('appdata', `teams/${id}`, 'Kinvey')
      .then(teamInfo => {
         ctx.name = teamInfo.name;
         ctx.description = teamInfo.description;
         ctx.members = teamInfo.members;

         ctx.teamId = teamInfo._id;

         app.loadPartials(partials).then(function() {
            this.partial('./templates/catalog/details.hbs');
         });
      })
      .catch(console.error());
}

export function leaveProcess(ctx) {
   addHeaderInfo(ctx);
   const id = ctx.params.teamId;
   get('appdata', `teams/${id}`, 'Kinvey').then(teamInfo => {
      teamInfo.members = teamInfo.members.filter(x => x !== ctx.username);
      put('appdata', `teams/${id}`, teamInfo, 'Kinvey')
         .then(() => {
            ctx.redirect(`#/catalog`);
         })
         .catch(console.error);
   });
}

export function joinProcess(ctx) {
   addHeaderInfo(ctx);
   const id = ctx.params.teamId;
   get('appdata', `teams/${id}`, 'Kinvey')
      .then(teamInfo => {
         teamInfo.members.push(sessionStorage.getItem('username'));
         return put('appdata', `teams/${id}`, teamInfo, 'Kinvey');
      })
      .then(function() {
         ctx.redirect(`#/catalog`);
      })
      .catch(console.error());
}

export function edit(ctx, app) {
   addHeaderInfo(ctx);
   partials['editForm'] = './templates/edit/editForm.hbs';
   const id = ctx.params.teamId;

   get('appdata', `teams/${id}`, 'Kinvey')
      .then(teamInfo => {
         ctx.teamId = teamInfo._id;
         ctx.name = teamInfo.name;
         ctx.description = teamInfo.description;
         app.loadPartials(partials).then(function() {
            this.partial('./templates/edit/editPage.hbs');
         });
      })
      .catch(console.error);
}

export function editProcess(ctx) {
   addHeaderInfo(ctx);

   const id = ctx.params.teamId;
   const name = ctx.params.name;
   const description = ctx.params.description;
   const members = [];
   members.push(sessionStorage.getItem('username'));

   put('appdata', `teams/${id}`, { name, description, members }, 'Kinvey').then(
      data => {
         ctx.redirect(`#/catalog/${id}`);
      }
   );
}
