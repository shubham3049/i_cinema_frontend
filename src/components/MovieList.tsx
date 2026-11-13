import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

type Props = {
    movies: Movie[];
};

function MovieList({ movies }: Props) {
    return (
        <div className="container mt-4">
            <div className="row">
                {movies.map((movie) => (
                    <div
                        key={movie.movieId}
                        className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    >
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;