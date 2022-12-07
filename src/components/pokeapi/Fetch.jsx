import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cover = styled.div``;

const Content = styled.p`
  flex: 1;
  text-transform: uppercase;
`;

const Fetch = () => {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState([]);

  const handleClick = async () => {
    try {
      axios.get(`${baseURL}${pokemon}`).then((response) => {
        setData(response.data);
      });
    } catch (error) {}
  };

  return (
    <>
      <input
        placeholder="Nombre del Pokemon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <button onClick={handleClick}>Buscar</button>
      <Container>
        <Cover>
          <img src={data.sprites?.front_default} alt="" />
        </Cover>
        <Content>{data.name}</Content>
      </Container>
    </>
  );
};

export default Fetch;
