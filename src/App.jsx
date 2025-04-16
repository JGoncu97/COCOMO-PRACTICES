import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Documentation } from './page/documentation/Documentation.jsx';
import { Application } from './page/application/Application.jsx';
import { Developers } from './page/info/Developers.jsx';
import { Home } from './page/home/Home.jsx';

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
