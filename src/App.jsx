import React, { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Error from "./pages/Error";
import Nav from "./Nav";
import Client from "./pages/Client";
import Book from "./pages/Book";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/clients/:clientId" element={<Client />} />
        <Route path="/clients/:clientId/books/:bookId" element={<Book />} />

        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
