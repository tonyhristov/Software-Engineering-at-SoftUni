import { getHome } from './controllers/homeController.js';
import { getLogin, postLogin } from './controllers/userController.js';
import { getRegister, postRegister } from './controllers/userController.js';
import { logoutUser } from './controllers/userController.js';
import { getCreate, postCreate } from './controllers/eventController.js';
import { getDetails } from './controllers/eventController.js';
import { getEdit, postEdit } from './controllers/eventController.js';
import { closeEvent } from './controllers/eventController.js';

const app = Sammy('body', function() {
   this.use('Handlebars', 'hbs');

   this.get('#/home', getHome);

   //user
   this.get('#/login', getLogin);
   this.post('#/login', postLogin);

   this.get('#/register', getRegister);
   this.post('#/register', postRegister);

   this.get('#/logout', logoutUser);

   //event
   this.get('#/create', getCreate);
   this.post('#/create', postCreate);

   this.get('/details/:id', getDetails);

   this.get('#/edit/:id', getEdit);
   this.post('#/edit/:id', postEdit);

   this.get('#/close/:id', closeEvent);
});
app.run('#/home');
