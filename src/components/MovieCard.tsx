import type { Movie } from "../types/Movie";
import { useNavigate } from "react-router-dom";

type Props = {
    movie: Movie;
};

function MovieCard({ movie }: Props) {
    const navigate = useNavigate();
    return (
        <div className="card h-100 shadow-sm"
        onClick={() => navigate(`/movie/${movie.movieId}`)}
  style={{ cursor: "pointer" }}>
            <img
                src={movie.imageUrl}
                className="card-img-top"
                alt={movie.movieName}
                style={{ height: "350px", objectFit: "cover" }}
            />

            <div className="card-body">
                <h5 className="card-title">{movie.movieName}</h5>

                <p className="card-text">
                    <strong>Genre:</strong> {movie.genre}
                </p>

                <p className="card-text">
                    <strong>Language:</strong> {movie.language}
                </p>

                <p className="card-text">
                    ⭐ {movie.rating}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;