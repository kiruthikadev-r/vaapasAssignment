import React, { useState } from 'react';
import './index.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            onSearch(query);
            setError('');
        } else {
            setError('Please enter a search term');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && query) {
            onSearch(query);
            setError(''); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className='search'>
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for a movie..."
            />
            <button type="submit">Search</button></div>
            
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default SearchBar;
