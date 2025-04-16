import { Suggestion } from '../models/suggestion.model';

const SuggestionService = {
  generate: async (prompt: string) => {
    return Suggestion.generate(prompt);
  },
};

export default SuggestionService;
