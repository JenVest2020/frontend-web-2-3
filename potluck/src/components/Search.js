import React, { useState } from "react";
import { connect } from 'react-redux';
import { fetchingEvents } from './actions/actionsIndex';



const Search = (props) => {
  console.log('from Search', props)
  /* Todo:STEP 1: Create searchTerm and searchResults state
   - searchTerm will save the data from the search input on every occurance of the change event.
   - searchResults is used to set the search result.
  */

  const [searchTerm, setSearchTerm] = useState("");


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchingEvents();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          name="searchfield"
          placeholder="Search here"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='btn'>search</button>
      </form>
       <ul>
        {/* {props.data.map((result) => (
          <li key={result.pantone_value}>{result.name}</li>
        ))} */}
        </ul>
    </>
      
    
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchingEvents
  }
)
(Search);
