import { useEffect, useState, type SetStateAction } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import FilterPanel from "../components/FilterPanel";
import MovieList from "../components/MovieList";
import type { Movie } from "../types/Movie";

import {
    getAllMovies,
    filterByGenre,
    filterByRating,
    filterByLanguage,
    searchMovies
  } from "../services/MovieService";

function Home() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedGenre, setSelectedGenre] = useState("");
const [selectedRating, setSelectedRating] = useState(0);
const [selectedLanguage, setSelectedLanguage] = useState("");

    useEffect(() => {

        getAllMovies()
            .then((data) => setMovies(data))
            .catch((error) => console.log(error));

    }, []);

    const handleGenreChange = (genre: string) => {
        setSelectedGenre(genre);
    };

    const handleSearch = (movieName: string) => {

        searchMovies(movieName)
            .then((data: SetStateAction<Movie[]>) => {
                console.log(data);
                setMovies(data);
            })
            .catch((error: any) => console.log(error));
    
    };
    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
    };

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    };
console.log(movies);
const filteredMovies = movies.filter((movie) => {
    const genreMatch =
        !selectedGenre ||
        movie.genre.toLowerCase() === selectedGenre.toLowerCase();

    const ratingMatch =
        !selectedRating ||
        movie.rating >= selectedRating;

    const languageMatch =
        !selectedLanguage ||
        movie.language.toLowerCase() === selectedLanguage.toLowerCase();

    return genreMatch && ratingMatch && languageMatch;
});
    return (
        <>
            <Navbar />
            <Searchbar onSearch={handleSearch} />
            <FilterPanel
  onGenreChange={handleGenreChange}
  onRatingChange={handleRatingChange}
  onLanguageChange={handleLanguageChange}
/>
<MovieList movies={filteredMovies} />
        </>
    );
}

export default Home;