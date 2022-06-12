import React, { useEffect } from 'react';

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
import Music from './pages/music';
import NowPlaying from './pages/now-playing';
import Videos from './pages/videos';
import Posts from './pages/posts';
import Cart from './pages/my-cart';
import {context} from './app.module';
import {mob} from './components/mobile/mob.module';
import {desk} from './components/desktop/desk.module';
import { useMediaPredicate } from "react-media-hook";


function App() {
  const lesserThan768 = useMediaPredicate("(max-width: 768px)");
  const greaterThan768 = useMediaPredicate("(min-width: 768px)");

  return (
    <context.theme>
      <Router>
        <Routes>
          <Route element = {
                  <>
                    {lesserThan768 && <mob.layout />}
                    {greaterThan768 && <desk.layout />}
                  </>
                 }
                 path='/' >

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
