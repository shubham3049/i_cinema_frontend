import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import FilterPanel from "../components/FilterPanel";
import MovieList from "../components/MovieList";

function Home(){
    return(
        <>
        <Navbar/>
        <Searchbar/>
        <FilterPanel/>
        <MovieList/>
        </>
    );
}

export default Home;