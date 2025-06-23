import MovieCard from "../Components/MovieCard"     
import { useState } from "react";

function Home(){
    // searchQuery, This is the current state value.
    // It holds whatever the user types in the search input box.

    //setSearchQuery, This is the function used to update searchQuery.
    // When it's called, React rerenders the component with the new value.
            
    const[searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Jhon Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    };


    return (
    <div className="home">
        <form onSubmit = {handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder = "Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
            //As the user types in the input box, onChange is triggered.
            // It calls setSearchQuery(...) with the new input.
            // This updates the searchQuery state.
            // The value={searchQuery} makes the input reflect that state (this is called a controlled input).
            
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    
        <div className="movies-grid">
            

            {movies.map(
                (movie) => 
                    (
                
                    <MovieCard movie ={movie} key ={movie.id} />
                    //Displays a list/grid of MovieCard components, one for each movie in the array.
                    )
        )}
        </div>
    </div>
    );
}

export default Home