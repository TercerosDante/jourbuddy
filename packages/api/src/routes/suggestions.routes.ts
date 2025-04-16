import { Router } from 'express';
import SuggestionController from '../controllers/suggestions.controller';
import { validate } from '../common/middleware/validation.middleware';
import { promptSchema } from '../common/schemas/prompt.schema';
const router = Router();

router.post('/', validate(promptSchema), SuggestionController.generate);

export default router;
