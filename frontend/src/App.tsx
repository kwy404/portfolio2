import { useState } from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <BrowserRouter>
           {/* <Route component = { Home }  path="/" exact /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
