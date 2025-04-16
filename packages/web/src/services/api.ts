export async function getSuggestions(prompt: string): Promise<string[]> {
  try {
    const response = await fetch('http://localhost:3000/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate suggestions');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating suggestions:', error);
    throw error;
  }
}
