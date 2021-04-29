import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController } from './controllers/MessagesController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.get('/messages/:user_id', messagesController.showByUser);
routes.post('/messages', messagesController.create);

routes.post('/settings', settingsController.create);

routes.post('/users', usersController.create);

export { routes };
