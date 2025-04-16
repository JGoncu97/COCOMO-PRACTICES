import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './page/Home/Home.jsx';
import { Documentation } from './page/Documentation/Documentation.jsx';
import { Application } from './page/Application/Application.jsx';
import { Developers } from './page/Info/Developers.jsx';


export const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/document" element={<Documentation />} />
          <Route path="/application" element={<Application />} />
        </Routes>
    </>
  );
};
