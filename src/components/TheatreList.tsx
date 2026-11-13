import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTheatresByLocation } from "../services/TheatreService";

import type { Theatre } from "../types/Theatre";

function TheatreList() {

    const { movieId } = useParams();
    const navigate = useNavigate();

    const [theatres, setTheatres] = useState<Theatre[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchTheatres = async () => {

            try {

                const data = await getTheatresByLocation("Bangalore");

                setTheatres(data);

            } catch (err) {

                setError("Unable to load theatres.");

            } finally {

                setLoading(false);
            }
        };

        fetchTheatres();

    }, []);

    if (loading) {
        return <h3 className="text-center mt-5">Loading theatres...</h3>;
    }

    if (error) {
        return <h3 className="text-center mt-5">{error}</h3>;
    }

    return (
        <div className="container mt-5">

            <h2>Select a Theatre</h2>

            <p>Movie ID: {movieId}</p>

            {theatres.map((theatre) => (

                <div
                    className="card mt-4 p-3"
                    key={theatre.theatreId}
                >

                    <h4>{theatre.theatrename}</h4>

                    <p>{theatre.location}</p>

                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            navigate(`/theatre/${theatre.theatreId}`)
                        }
                    >
                        Select Theatre
                    </button>

                </div>

            ))}

        </div>
    );
}

export default TheatreList;