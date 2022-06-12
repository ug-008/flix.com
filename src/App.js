import React from 'react';

/**
 * Styles
 */
import './App.css';

/**
 * Router
 */
import { 
  Route,
  Routes, 
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

/**
 * Pages 
 */
import Home from './pages/home';
import NowPlaying from './pages/now-playing';
import Music from './pages/music';
import Layout from './Layout';
import Videos from './pages/videos';
import Posts from './pages/posts';
import Cart from './pages/my-cart';
import {context} from './app.module';


function App() {

  return (
    <context.theme>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='now-playing' element={<NowPlaying />} />
            <Route path='music' element={<Music />} />
            <Route path='videos' element={<Videos />} />
            <Route path='my-cart' element={<Cart />} />
            <Route path='posts' element={<Posts />} />
            <Route index element={<Navigate replace to='home' />} />
          </Route> 
        </Routes>
      </Router>
    </context.theme>
  );
}

export default App;
