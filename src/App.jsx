import Model from "./components/model"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeLayout from "./layout/HomeLayout"
import Home from "./pages/Home"
import HomeLayour from "./layout/HomeLayout"

function App() {
  
  return (
      <Router>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/become-sitter" element={<div></div>}> </Route>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
