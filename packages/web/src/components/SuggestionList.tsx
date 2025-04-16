interface SuggestionListProps {
  suggestions: string[];
}

export function SuggestionList({ suggestions }: SuggestionListProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Content Suggestions</h2>
      {
        suggestions.length === 0 ? (
          <div className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="mt-2 text-gray-600">No suggestions generated</p>
          </div>
        ) : (
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="mt-2 text-gray-600">{suggestion}</p>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}
