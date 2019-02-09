const Movie = ( { movie } ) => {
    return (
        <div className="card">
            <div className="card-header">
                { movie.title }
            </div>
        </div>
    )
}

const Movies = () => {

    return (<div className="text-center mt-5">
        {
            moviesAbstraction.map((movie, index) => {
                return <Movie movie={movie} key={`movie-${index}`}/>
            })
        }
    </div>)
}

ReactDOM.render(<Movies/>, document.getElementById('root'))