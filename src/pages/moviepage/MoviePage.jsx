import React, { useEffect } from 'react'
import { usePopularMoviesQuery } from '../../hook/usePopularMoviesQuery'
import MovieCard from '../homepage/MovieCard/MovieCard'
import Banner from '../homepage/banner/Banner'
import Footer from '../../layouts/Footer'

const MoviePage = () => {
  // 1. 인기영화 데이터 가져오기
  const {data : popularData} = usePopularMoviesQuery();
  return (
    <div className='moviepage'>
      <div className="moviepage-wrap">
        {popularData.data.results.map((movie, index) => (
            <div md={3} className='movie-content' key={index}>
              <MovieCard movie={movie}></MovieCard>
            </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MoviePage
