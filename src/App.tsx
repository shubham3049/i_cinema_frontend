import Home from "./Pages/Home";
import MovieDetails from "./components/MovieDetails";
import TheatreDetails from "./components/TheatreDetails";
import TheatreList from "./components/TheatreList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeatSelection from "./components/SeatSelection";
import Booking from "./components/Booking";
import BookingSuccess from "./components/BookingSuccess";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/theaters/:movieId" element={<TheatreList />} />
        <Route
    path="/theatre/:theatreId"
    element={<TheatreDetails />}
/>
<Route
  path="/seats/:showId"
  element={<SeatSelection />}
/>
<Route
    path="/booking"
    element={<Booking />}
/>

<Route
  path="/booking-success"
  element={<BookingSuccess />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;