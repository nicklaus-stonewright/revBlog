import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PostPage from './pages/PostPage';
import EditPosts from './pages/EditPostPage';


const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/editpost/:documentId' element={<EditPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

