import React from "react";
import Search from './Search';
import { Link } from 'react-router-dom';


function Home(props) {
  return (
    <>
      <h1 className='heading'>Welcome to Your Home Page</h1>
      <div className='home'>
        <div className='saved'>
          <h2>Saved Events</h2>
          <p>(All Events Saved By User Will Appear Here)</p>

          <ul>
            <Link className='link' to='/singleEvent'><li><h3>Event Title1</h3></li></Link>
            <span>Event Date & Time1</span><br></br>
            <span>Event Location1</span>
            <Link className='link' to='/singleEvent'><li><h3>Event Title2</h3></li></Link>
            <span>Event Date & Time2</span><br></br>
            <span>Event Location2</span>
          </ul>
        </div>
        <div className='search'>

          <h2>Search Events</h2>
          <Search />
        </div>
      </div>

    </>
  )
};

export default Home;
