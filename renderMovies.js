function renderMovie(movie) {
    return `
        <div class="card">
            <div class="card-header">
                ${movie.title}
            </div>
        </div>
    `
}

function renderMovies(movies) {
    return `
        <div class="text-center mt-5">
            ${
                movies.map(renderMovie).join('')
            }
        </div>
    `
}

var content = document.getElementById('root')
content.innerHTML = renderMovies(moviesAbstraction)