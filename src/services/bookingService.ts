import axios from "axios";

const BASE_URL = "http://localhost:8080/cinema";

export interface BookingRequest {
    userId: number | null;
    showId: number;
}

export interface BookingResponse {
    bookingId: number;
    userId: number | null;
    showId: number;
    bookingDate: string;
    status: string;
}

export const createBooking = async (
    booking: BookingRequest
): Promise<BookingResponse> => {

    const response = await axios.post<BookingResponse>(
        `${BASE_URL}/booking`,
        booking
    );

    return response.data;
};