import { useState } from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import './index.css';
import Header from './components/Header';

function App() {
  
  return (
    <div className='theme-dark fullBody'>
        <Header/>
        <BrowserRouter>
            {/* <Route component = { Home }  path="/" exact /> */}
        </BrowserRouter>
    </div>
  )
}

export default App
