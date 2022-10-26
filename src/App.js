import {Routes, Route} from "react-router-dom"

import Navigation from "./routes/navigation/index"
import Home from "./routes/home/index"
import Pokedex from "./routes/pokedex/index"
import TypeMatchups from "./routes/type-matchups/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="type-matchups" element={<TypeMatchups />} />
      </Route>
    </Routes>
  )
}

export default App
