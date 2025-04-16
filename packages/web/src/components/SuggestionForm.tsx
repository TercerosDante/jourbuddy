import { useState } from 'react';

interface SuggestionFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export function SuggestionForm({ onSubmit, isLoading }: SuggestionFormProps) {
  const [prompt, setPrompt] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="prompt" className="text-md font-medium text-gray-700">
          Enter a topic for content suggestions
        </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="prompt"
          className="px-4 py-2 border border-gray-300 rounded-lg "
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-center">
        <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isLoading ? 'Generating...' : 'Generate Suggestions'}
        </button>
      </div>
    </form>
  );
}
