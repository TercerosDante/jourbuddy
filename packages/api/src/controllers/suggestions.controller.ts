import { Request, Response, NextFunction } from 'express';
import SuggestionService from '../services/suggestions.service';

const SuggestionController = {
  generate: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const users = await SuggestionService.generate(request.body.prompt);
      response.json(users);
    } catch (error) {
      next(error);
    }
  },
};

export default SuggestionController;
