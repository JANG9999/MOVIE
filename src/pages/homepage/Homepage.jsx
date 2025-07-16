import React from 'react'
import Banner from './banner/Banner'
import PopularMovieSlide from './PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './UpcomingMovieSlide/UpcomingMovieSlide'
import NowPlayingMovieSlide from './NowPlayingMovieSlide/NowPlayingMovieSlide'
import Footer from '../../layouts/Footer'

const Homepage = () => {
  return (
    <div className='main'>
      <Banner></Banner>
      <div className="main-inner">
        <h2>Popular</h2>
        <PopularMovieSlide></PopularMovieSlide>
        <h2>Top10</h2>
        <TopRatedMovieSlide></TopRatedMovieSlide>
        <h2>Now Play</h2>
        <NowPlayingMovieSlide></NowPlayingMovieSlide>
        <h2>Upcoming</h2>
        <UpcomingMovieSlide></UpcomingMovieSlide>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Homepage
