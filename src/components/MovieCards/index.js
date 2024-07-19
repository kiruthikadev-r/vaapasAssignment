import React, { useEffect, useState } from 'react';
import './index.css';

const MovieCard = ({ movie }) => {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const fetchDogImage = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                setDogImage(data.message);
            } catch (error) {
                console.error('Error fetching dog image:', error);
            }
        };
        fetchDogImage();
    }, []);

    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <img src={dogImage} alt="Random dog" />
            <p>{movie.author_name?.join(', ')}</p>
            <p>{movie.first_publish_year}</p>
        </div>
    );
};

export default MovieCard;
