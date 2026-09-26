import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface MovieShow {
  showId: number;
  showName: string;
  showDate: string;
  showTime: string;
  price: number;
  theatreId: number;
  movieId: number;
}

function TheatreDetails() {
  const { theatreId } = useParams();
  const navigate = useNavigate();

  const [shows, setShows] = useState<MovieShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cinema/showtimes?theatreId=${theatreId}`
        );

        setShows(response.data);
      } catch (err) {
        setError("Unable to load showtimes.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [theatreId]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading showtimes...</h3>;
  }

  if (error) {
    return <h3 className="text-center mt-5">{error}</h3>;
  }

  return (
    <div className="container mt-5">
      <h2>Theatre Details</h2>

      <p>Theatre ID: {theatreId}</p>

      <h3 className="mt-4">Available Shows</h3>

      {shows.length === 0 ? (
        <p>No shows available.</p>
      ) : (
        shows.map((show) => (
          <div className="card mt-3 p-3" key={show.showId}>
            <h4>{show.showName}</h4>

            <p>
              Date: {show.showDate}
            </p>

            <p>
              Time: {show.showTime}
            </p>

            <p>
              Price: ₹{show.price}
            </p>

            <button
              className="btn btn-primary"
              onClick={() =>
                navigate(`/seats/${show.showId}`)
              }
            >
              Select Show
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TheatreDetails;