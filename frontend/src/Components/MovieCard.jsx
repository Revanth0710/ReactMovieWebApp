
function MovieCard({movie}){
    {/* This is a functional React component named MovieCard.
        Movie is expected to be an object containing movie details like url, title, and release_date. 
    */}
  
    function onFavoriteClick(){
        alert("clicked")
    }
    
    return (
          
        <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                   🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>
    )
}

export default MovieCard