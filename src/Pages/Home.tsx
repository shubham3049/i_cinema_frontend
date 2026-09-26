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

    useEffect(() => {

        getAllMovies()
            .then((data) => setMovies(data))
            .catch((error) => console.log(error));

    }, []);

    const handleGenreChange = (genre: string) => {

        if (genre === "") {
            getAllMovies()
                .then(data => setMovies(data))
                .catch(error => console.log(error));
    
            return;
        }
    
        filterByGenre(genre)
            .then(data => setMovies(data))
            .catch(error => console.log(error));
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

        if (!rating) {
            getAllMovies()
                .then(data => setMovies(data))
                .catch(error => console.log(error));
    
            return;
        }
    
        filterByRating(rating)
            .then(data => setMovies(data))
            .catch(error => console.log(error));
    };

    const handleLanguageChange = (language: string) => {

        if (language === "") {
          getAllMovies()
            .then(data => setMovies(data))
            .catch(error => console.log(error));
      
          return;
        }
      
        filterByLanguage(language)
          .then(data => setMovies(data))
          .catch(error => console.log(error));
      };
console.log(movies);
    return (
        <>
            <Navbar />
            <Searchbar onSearch={handleSearch} />
            <FilterPanel
  onGenreChange={handleGenreChange}
  onRatingChange={handleRatingChange}
  onLanguageChange={handleLanguageChange}
/>
            <MovieList movies={movies} />
        </>
    );
}

export default Home;