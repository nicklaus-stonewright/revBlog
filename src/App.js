import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PostPage from './pages/PostPage';


const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blogposts' element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

