import * as express from 'express';
import * as controllers from '../controllers/customers';

const router = express.Router();

router.post('/', controllers.create);
router.get('/', controllers.list);
router.get('/:id', controllers.retrieve);

export default router;
