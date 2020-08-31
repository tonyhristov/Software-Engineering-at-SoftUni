import { catalog } from './controllers/TeamController.js';
import { create, createProcess } from './controllers/TeamController.js';
import { details } from './controllers/TeamController.js';
import { joinProcess, leaveProcess } from './controllers/TeamController.js';
import { edit, editProcess } from './controllers/TeamController.js';

import { register, registerProcess } from './controllers/UserController.js';
import { login, loginProcess } from './controllers/UserController.js';
import { logout } from './controllers/UserController.js';

import { home, about } from './controllers/DefaultController.js';

(() => {
   const app = Sammy('#main', function() {
      this.use('Handlebars', 'hbs');

      //home
      this.get('#/', function(ctx) {
         home(ctx, this);
      });

      //about
      this.get('#/about', function(ctx) {
         about(ctx, this);
      });

      //register
      this.get('#/register', function(ctx) {
         register(ctx, this);
      });
      this.post('#/register', function(ctx) {
         registerProcess(ctx);
      });

      //login
      this.get('#/login', function(ctx) {
         login(ctx, this);
      });
      this.post('#/login', function(ctx) {
         loginProcess(ctx);
      });

      //logout
      this.get('#/logout', function(ctx) {
         logout(ctx);
      });

      //catalog
      this.get('#/catalog', function(ctx) {
         catalog(ctx, this);
      });

      //create Team
      this.get('#/create', function(ctx) {
         create(ctx, this);
      });
      this.post('#/create', function(ctx) {
         createProcess(ctx);
      });

      //details
      this.get('#/catalog/:id', function(ctx) {
         details(ctx, this);
      });

      //join team
      this.get('#/join/:teamId', function(ctx) {
         joinProcess(ctx);
      });

      //leave team
      this.get('#/leave/:teamId', function(ctx) {
         leaveProcess(ctx);
      });

      //edit team
      this.get('#/edit/:teamId', function(ctx) {
         edit(ctx, this);
      });
      this.post('#/edit/:teamId', function(ctx) {
         editProcess(ctx);
      });
   });

   app.run();
})();
