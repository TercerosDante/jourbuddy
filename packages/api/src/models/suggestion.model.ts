import suggestionData from '../db/suggestions.json';

type SuggestionItem = {
  keywords: string[];
  suggestions: string[];
};

const data: SuggestionItem[] = suggestionData;

export const Suggestion = {
  getDB: () => {
    return data;
  },
};
