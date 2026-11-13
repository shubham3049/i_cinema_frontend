import axios from "axios";
import type { Movie } from "../types/Movie";

const BASE_URL = "http://localhost:8080/cinema";

export const getAllMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${BASE_URL}/all`);
    return response.data;
};

export const getMovieById = async (movieId: number): Promise<Movie> => {
    const response = await axios.get<Movie>(
      `${BASE_URL}/${movieId}`
    );
  
    return response.data;
  };
export const filterByGenre = async (genre: string): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(
        `${BASE_URL}/genre?genre=${genre}`
    );

    return response.data;
};

export const searchMovies = async (movieName: string): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(
        `${BASE_URL}/search?movieName=${movieName}`
    );

    return response.data;
};

export const filterByRating = async (rating: number): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(
        `${BASE_URL}/rating?rating=${rating}`
    );

    return response.data;
};
export const filterByLanguage = async (language: string): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(
      `${BASE_URL}/language?language=${language}`
    );
  
    return response.data;
  };
