import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "../RightNav";


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 2;

  div {
    width: inherit;
    height: 0.25rem;
    background-color: ${({ showMenu }) =>
      showMenu ? "orangered" : "aliceblue"};
    transform-origin: 1px;
    transition: all 0.3s ease;
  }

  div:nth-of-type(1) {
    transform: ${({ showMenu }) => (showMenu ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-of-type(2) {
    transform: ${({ showMenu }) =>
      showMenu ? "translateX(120px)" : "translateX(0)"};
  }

  div:nth-of-type(3) {
    transform: ${({ showMenu }) => (showMenu ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media screen and (min-width:761px){
      display:none;
  }
`;

function Burger() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <StyledBurger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav showMenu={showMenu}/>
    </>
  );
}

export default Burger;
