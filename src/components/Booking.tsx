import { useLocation, useNavigate } from "react-router-dom";
import { createBooking } from "../services/bookingService";
import { useState } from "react";

function Booking() {

    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

    const {
        showId,
        selectedSeats,
        totalPrice
    } = location.state || {};

    if (!selectedSeats || selectedSeats.length===0) {
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
  onClick={async () => {
    try {
        setLoading(true);
        setError("");

        const response = await createBooking({
            userId: null,
            showId: Number(showId)
        });

        navigate("/booking-success", {
            state: {
                bookingId: response.bookingId,
                showId,
                selectedSeats,
                totalPrice
            }
        });

    } catch (err) {
        console.error("Booking failed:", err);
        setError("Unable to confirm booking. Please try again.");
    } finally {
        setLoading(false);
    }
}}
>
{loading ? "Confirming..." : "Confirm Booking"}
</button>
{error && <p className="text-danger">{error}</p>}

        </div>
    );
}

export default Booking;