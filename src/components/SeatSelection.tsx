import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


interface Seat {
  seatId: number;
  seatNumber: number;
  seatType: string;
  seatStatus: string;
  price: number;
  showId: number;
}

function SeatSelection() {

  const { showId } = useParams();
  const navigate = useNavigate();

  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchSeats = async () => {

      try {

        const response = await axios.get(
          `http://localhost:8080/cinema/seats?showId=${showId}`
        );

        console.log("Seats API response:", response.data);
setSeats(response.data);

      } catch (err) {

        setError("Unable to load seats.");

      } finally {

        setLoading(false);
      }
    };

    fetchSeats();

  }, [showId]);
  

  const handleSeatClick = (seat: Seat) => {
    console.log("Seat clicked:", seat);
  
    if (seat.seatStatus !== "AVAILABLE") {
      return;
    }
  
    setSelectedSeats((previous) => {
      const alreadySelected = previous.some(
        (selected) => selected.seatId === seat.seatId
      );
  
      if (alreadySelected) {
        return previous.filter(
          (selected) => selected.seatId !== seat.seatId
        );
      }
  
      return [...previous, seat];
    });
  };

  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );

  if (loading) {
    return (
      <h3 className="text-center mt-5">
        Loading seats...
      </h3>
    );
  }

  if (error) {
    return (
      <h3 className="text-center mt-5">
        {error}
      </h3>
    );
  }

  return (
    <div className="container mt-5">

      <h2 className="text-center">
        Select Your Seats
      </h2>

      <p className="text-center">
        Show ID: {showId}
      </p>

      <div className="text-center my-4">
        <div className="border p-2">
          SCREEN
        </div>
      </div>

      <div className="row justify-content-center">

      {seats
  .filter((seat) => seat != null)
  .map((seat) => (

          <div
            key={seat.seatId}
            className="col-3 col-md-2 mb-3 text-center"
          >

            <button
              className={`btn ${
                selectedSeats.some(
                  (selected) =>
                    selected.seatId === seat.seatId
                )
                  ? "btn-primary"
                  : seat.seatStatus === "AVAILABLE"
                  ? "btn-outline-success"
                  : "btn-secondary"
              }`}
              disabled={seat.seatStatus !== "AVAILABLE"}
              onClick={() => handleSeatClick(seat)}
            >
              {seat.seatNumber}
            </button>

          </div>

        ))}

      </div>

      <div className="text-center mt-4">

        <h4>
          Selected Seats:{" "}
          {selectedSeats.length}
        </h4>

        <h4>
          Total: ₹{totalPrice}
        </h4>

        <button
          className="btn btn-success mt-2"
          disabled={selectedSeats.length === 0}
          onClick={() => {
            navigate("/booking", {
              state: {
                showId: Number(showId),
                selectedSeats,
                totalPrice: selectedSeats.reduce(
                  (total, seat) => total + seat.price,
                  0
                )
              }
            });
          }}
        >
          Proceed to Booking
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;