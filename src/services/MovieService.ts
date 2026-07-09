import axios from "axios";
import type { Movie } from "../types/Movie";

const BASE_URL = "http://localhost:8888/cinema";

export const getAllMovies = () => {
    return axios.get<Movie[]>(`${BASE_URL}/all`);
};