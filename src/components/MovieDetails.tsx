import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../services/MovieService";
import type { Movie } from "../types/Movie";

function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
        try {
          if (!movieId) return;
      
          const data = await getMovieById(Number(movieId));
      
          setMovie(data);
        } catch (err) {
          setError("Movie details could not be loaded.");
        } finally {
          setLoading(false);
        }
      };
  
    fetchMovie();
  }, [movieId]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (error || !movie) {
    return (
      <div className="text-center mt-5">
        <h3>{error || "Movie not found"}</h3>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/")}
        >
          Back to Movies
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row">
        <div className="col-md-5">
          <img
            src={movie.imageUrl}
            alt={movie.movieName}
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              maxHeight: "600px",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-md-7">
          <h1>{movie.movieName}</h1>

          <p>
            <strong>Release Date:</strong> {movie.releaseDate}
          </p>

          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>

          <p>
            <strong>Language:</strong> {movie.language}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {movie.rating}
          </p>
          

          <p>
            <strong>Description:</strong>
          </p>

          <p>{movie.description}</p>

          <button
    className="btn btn-primary mt-3"
    onClick={() => navigate(`/theaters/${movieId}`)}
>
    Book My Show
</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;