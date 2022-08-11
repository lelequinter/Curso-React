import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, Hero, MarvelPage, Search } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          {/* Rutas de Heroes */}
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />

          {/* Rutas Default */}
          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
