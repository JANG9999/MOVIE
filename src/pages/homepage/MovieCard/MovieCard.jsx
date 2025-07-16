import React from 'react'
import { useGenreListQuery } from '../../../hook/useGenreList';
import { useNavigate } from 'react-router-dom';
/* icon */
import { FaStar } from "react-icons/fa6";

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  // console.log(movie, 'movie')
  const imageUrl=`https://media.themoviedb.org/t/p/w500${movie.poster_path}`;
  
  const {data} = useGenreListQuery();
  
  const genreList = data?.data?.genres || [];
  const genreNames = genreList .filter(g => movie.genre_ids?.includes(g.id)).map(g => g.name)
  const adult = movie.adult ? "성인관람":'전체관람'
  return (
    <div className='movicard'>
      <div className='movie-card-wrap'
      style={{ cursor: 'pointer' }}
      onClick={()=>navigate(`/movie/${movie.id}`)}
      >
        <div className='movie-card'
        style={{backgroundImage:`url(${imageUrl})`, height:'500px'
        }}
        >
          <div className="overlay">
            <div className="text-wrap">
              <p className='title'>{movie.title}</p>
              <p className='vote'><FaStar className='star' />{movie.vote_average.toFixed(1)}</p>
              <p className='genre'>#{genreNames?.join('#')}</p>
              <p className='overview'>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
