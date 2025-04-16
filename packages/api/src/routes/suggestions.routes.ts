import { Router } from 'express';
import SuggestionController from '../controllers/suggestions.controller';

const router = Router();

router.post('/', SuggestionController.generate);

export default router;
