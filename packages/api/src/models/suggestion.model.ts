import suggestionData from '../db/suggestions.json';

type SuggestionItem = {
  keywords: string[];
  suggestions: string[];
};

const data: SuggestionItem[] = suggestionData;

export const Suggestion = {
  generate: (prompt: string) => {
    const normalizedPrompt = prompt.toLowerCase();

    const found = data.find((item) => {
      return item.keywords.some((keyword) => normalizedPrompt.includes(keyword.toLowerCase()));
    });

    if (!found) {
      return [];
    }

    const itemsToReturn = Math.floor(Math.random() * 3) + 3;
    const shuffledSuggestions = [...found.suggestions].sort(() => Math.random() - 0.5);
    return shuffledSuggestions.slice(0, itemsToReturn);
  },
};
