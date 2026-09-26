import { useLocation } from "react-router-dom";


function BookingSuccess() {

  const location = useLocation();

const {
  bookingId,
  showId,
  selectedSeats,
  totalPrice
} = location.state || {};

  return (
    <div className="container mt-5">

      <div className="card p-5 text-center">

        <h1 className="text-success">
          🎉 Booking Confirmed!
        </h1>

        <p className="mt-3">
          Your movie tickets have been successfully booked.
        </p>

        <hr />

        <h4>Booking ID</h4>
        <p>{bookingId}</p>

        <h4>Show ID</h4>
        <p>{showId}</p>

        <h4>Selected Seats</h4>

        {selectedSeats?.map((seat: any) => (
          <p key={seat.seatId}>
            Seat {seat.seatNumber} - ₹{seat.price}
          </p>
        ))}

<h2>Total Amount: ₹{totalPrice}</h2>

        <p className="mt-4">
          Thank you for booking with iCinema!
        </p>

      </div>

    </div>
  );
}

export default BookingSuccess;