import { useState } from 'react';
import { SuggestionForm } from './components/SuggestionForm';
import { SuggestionList } from './components/SuggestionList';
import { getSuggestions, Suggestion } from './services/api';

export default function App() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await getSuggestions(prompt);
      setSuggestions(results);
    } catch (err) {
      setError('Failed to generate suggestions. Please try again.');
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">JourBuddy</h1>
        </div>

        <SuggestionForm onSubmit={handleSubmit} isLoading={isLoading} />

        <div className="text-center">
          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>

        <SuggestionList suggestions={suggestions} />
      </div>
    </div>
  );
}
