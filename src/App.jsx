
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeLayout from "./layout/HomeLayout.jsx"
import Home from "./pages/Home.jsx"


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
