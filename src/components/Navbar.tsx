import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to="/" className="logo">
  iCinema
</Link>

        </nav>
    );
}

export default Navbar;