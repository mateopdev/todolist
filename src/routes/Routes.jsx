import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PokeApi from "../pages/pokeapi/PokeApi";
import Layout from "../components/layout/Layout";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokeapi" element={<PokeApi />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
