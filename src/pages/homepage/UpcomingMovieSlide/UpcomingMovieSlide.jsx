import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { useUpcomingMoviesQuery } from '../../../hook/useUpcomingMoviesQuery';

function UpcomingMovieSlide() {
  const {data, isLoading, isError, error} = useUpcomingMoviesQuery();
  console.log('top', data)
  if(isLoading){
    return <h1>로딩중</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} draggable={true} swipeable={true}>
      {data.data.results.slice(0,10).map((movie, index)=><MovieCard movie={movie} key={index} rank={index+1}></MovieCard>)}
    </Carousel>
  )
}

export default UpcomingMovieSlide
