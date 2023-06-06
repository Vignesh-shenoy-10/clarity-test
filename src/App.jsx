import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Searchmusic from "./components/Searchmusic"

import Welcome from "./components/Welcome"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Welcome/>}/>
        <Route path="/Login" element={ <Home/> } />
        <Route path="/Search" element={ <Searchmusic/> } />
        
      </Routes>
    </div>
  )
}

export default App