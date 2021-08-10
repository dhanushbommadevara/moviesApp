import './index.css'

const MoviesCard = props => {
  const {movieData} = props
  const {title, description, genres} = movieData
  return (
    <li className="movie-item">
      <div className="card-layout">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{genres}</p>
      </div>
    </li>
  )
}
export default MoviesCard
