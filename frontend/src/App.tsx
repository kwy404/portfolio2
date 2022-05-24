import { useState } from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
           {/* <Route component = { Home }  path="/" exact /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
