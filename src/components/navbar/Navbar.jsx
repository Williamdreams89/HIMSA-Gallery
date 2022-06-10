import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

function Navbar() {
  const Navbar = styled.div`
    background-color: #333;
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    margin-bottom: 2rem;

    h2{
        color:aliceblue;

        @media screen and (max-width:760px){
            position fixed;
            left: 15px;
        }
    }
  `;
  return (
    <Navbar>
      <h2>William Dreams</h2>
      <Burger />
      
    </Navbar>
  );
}

export default Navbar;
