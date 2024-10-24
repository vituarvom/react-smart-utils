import React, { useState, useEffect } from 'react';
import useDebounce from '../../../../package/src/hooks/useDebounce/useDebounce'; // Adjust the path according to your project structure

const UseDebounce: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce<string>(searchTerm, 500); // 500ms delay
    const [suggestions, setSuggestions] = useState<string[]>([]); // State to hold suggestions

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        // Only fetch suggestions if there's a valid search term
        if (debouncedSearchTerm) {
            console.log('Searching for:', debouncedSearchTerm);

            // Fetch suggestions from your API endpoint
            fetch(`http://localhost:5000/suggestions?q=${debouncedSearchTerm}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Assuming your API returns an array of suggestions
                    const filteredSuggestions = data.suggestions
                        .filter((suggestion: string) =>
                            suggestion.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
                        )
                        .filter((suggestion: string, index: number, self: string[]) =>
                            self.indexOf(suggestion) === index // Remove duplicates
                        );

                    // Update state with suggestions if they have changed
                    if (JSON.stringify(suggestions) !== JSON.stringify(filteredSuggestions)) {
                        setSuggestions(filteredSuggestions);
                    }
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                    setSuggestions([]); // Clear suggestions on error
                });
        } else {
            setSuggestions([]); // Clear suggestions when search term is empty
        }
    }, [debouncedSearchTerm, suggestions]); // Add suggestions as a dependency to avoid infinite loops

    return (
        <div>
            <h1>Search Component</h1>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleChange} 
                placeholder="Search..."
            />
            <p>Debounced Search Term: {debouncedSearchTerm}</p>
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={`${suggestion}-${index}`}>{suggestion}</li> // Ensure unique keys
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UseDebounce;