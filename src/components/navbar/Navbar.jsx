import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  max-width: 1100px;
  width: 100%;
  justify-content: center;
  height: 96px;
`;

const NavContainer = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  & a {
    text-decoration: none;
    color: #fafafa;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/pokeapi">PokeAPI</Link>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
