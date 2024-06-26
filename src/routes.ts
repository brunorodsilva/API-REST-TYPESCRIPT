import { Router } from 'express'
import { SubjectController } from './controllers/SubjectController';

const routes = Router();

routes.post('/subject', new SubjectController().create);

export default routes;