import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Get } from './components/Get';
import { Post } from './components/Post';
import { Update } from './components/Update';
import { Delete } from './components/Delete';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/get">Get quotes</Link></li>
            <li><Link to="/post">Insert quote</Link></li>
            <li><Link to="/update">Update quote</Link></li>
            <li><Link to="/delete">Delete quote</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/get" element={<Get />} />
          <Route path="/post" element={<Post />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
