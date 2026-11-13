import { useState } from "react";

type Props = {
    onSearch: (movieName: string) => void;
};

function SearchBar({ onSearch }: Props) {

    const [movieName, setMovieName] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Search Movie..."
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
            />

            <button onClick={() => onSearch(movieName)}>
                Submit
            </button>
        </div>
    );
}

export default SearchBar;