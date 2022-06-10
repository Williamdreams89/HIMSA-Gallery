import React from "react";
import styled from "styled-components";

function RightNav({ showMenu }) {
  const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 60%;

    @media screen and (min-width: 761px) {
      li a {
        color: aliceblue;
        text-decoration: none;
        font-size: 19px;
      }

      li {
        padding: 5px 1.5rem;
        border-radius: 20px;
      }

      li:hover {
        background-color: orangered;
      }
    }

    @media screen and (max-width: 760px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      position: fixed;
      background-color: #333;
      right: 0;
      top: 5px;
      // border: 2px solid green;
      width: 75%;
      height: 95%;
      display: ${({ showMenu }) => (showMenu ? "" : "none")};
      transition: transform 0.3s ease-in-out;

      li {
        width: 100%;
        text-align: center;
      }

      li a {
        color: aliceblue;
        text-decoration: none;
        font-size: 17px;
        width: 100%;
        padding: 10px 10rem;
        border-radius: 20px 0 20px 0;
      }

      li :hover {
        background-color: orangered;
      }
    }
  `;
  return (
    <Ul showMenu={showMenu}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">AboutMe</a>
      </li>
      <li>
        <a href="/">Portfolio</a>
      </li>
      <li>
        <a href="/">Service</a>
      </li>
      <li>
        <a href="/">ContactMe</a>
      </li>
    </Ul>
  );
}

export default RightNav;
