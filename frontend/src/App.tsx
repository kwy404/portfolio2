import { useState } from 'react'
import './index.css';
import Header from './components/Header';



function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={`${darkTheme ? `theme-dark` : `theme-white`} fullBody`}>
        <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}/>
    </div>
  )
}

export default App
