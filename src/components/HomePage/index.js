import {Component} from 'react'

import Cookies from 'js-cookie'
import MoviesCard from '../MoviesCard'

class HomePage extends Component {
  state = {
    moviesList: [],
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const apiUrl = 'https://demo.credy.in/api/v1/maya/movies/'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Token ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.results.map(movies => ({
        title: movies.title,
        description: movies.description,
        genres: movies.genres,
        uuid: movies.uuid,
      }))
      this.setState({moviesList: updatedData})
    }
  }

  renderMoviesList = () => {
    const {moviesList} = this.state
    return (
      <div>
        <h1>All Movies</h1>
        <ul className="movies-list">
          {moviesList.map(movie => (
            <MoviesCard movieData={movie} key={movie.uuid} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.renderMoviesList()}</>
  }
}
export default HomePage
