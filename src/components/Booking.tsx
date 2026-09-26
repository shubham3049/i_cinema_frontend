import { useLocation, useNavigate } from "react-router-dom";

function Booking() {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        showId,
        selectedSeats,
        totalPrice
    } = location.state || {};

    if (!selectedSeats) {
        return (
            <div className="container mt-5 text-center">
                <h3>No seats selected.</h3>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <h2>Booking Summary</h2>

            <p>
                <strong>Show ID:</strong> {showId}
            </p>

            <h4 className="mt-4">
                Selected Seats
            </h4>

            {selectedSeats.map((seat: any) => (
                <p key={seat.seatId}>
                    Seat {seat.seatNumber} - ₹{seat.price}
                </p>
            ))}

            <hr />

            <h4>
                Total Amount: ₹{totalPrice}
            </h4>

            <button
  className="btn btn-success mt-3"
  onClick={() => {
    const bookingId =
      "BK" + Math.floor(100000 + Math.random() * 900000);
  
    navigate("/booking-success", {
      state: {
        bookingId,
        showId,
        selectedSeats,
        totalPrice
      }
    });
  }}
>
  Confirm Booking
</button>

        </div>
    );
}

export default Booking;