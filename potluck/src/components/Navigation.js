import React from "react";
import { Link, } from "react-router-dom";
import styled from "styled-components";
import potluckLogo from '../potluckLogo.png';


const NavContainer = styled.div`
  //! I need to make this more user-friendly
  width: 90%;
  font-size: 1rem;
  margin: auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #070707;
  border: 2px solid black;

  img {
    width: 4%;
    padding-left:1%;
  }

  h1 {
    color: #eeeeee;
    padding: 5%;
  }
  nav {
    a {
      margin-right: 60px;
      text-decoration: none;
      color: white;

      &:hover {
        color: #b1e083;
      }
    }
  }
`;

const Navigation = (props) => {
  //function goes here!

  return (
    <NavContainer>
      <img src={potluckLogo} alt='colorful background with silver stock pot with four leaf clover sticking out' />
      <h1>POTLUCK PLANNER</h1>
      <nav>
        <Link to="/home">Home</Link>

        <Link to='/addevent'>Add Event</Link>
        <Link to="/Login">Login</Link>
        <a href="https://bw-potluck-planner-krisda.github.io/marketing-web-1/">Landing Page</a>
      </nav>
    </NavContainer>
  );
};

export default Navigation;
