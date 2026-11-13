import axios from "axios";
import type { Theatre } from "../types/Theatre";

const API_URL = "http://localhost:8080/cinema";

export const getTheatresByLocation = async (
    location: string
): Promise<Theatre[]> => {

    const response = await axios.get<Theatre[]>(
        `${API_URL}/theatres`,
        {
            params: {
                location: location
            }
        }
    );

    return response.data;
};