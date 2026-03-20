import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar.jsx"

const HomeLayour  = ()=>{
    return (
        <div className="min-h-screen">
        <NavBar/>
        <Outlet/>
        </div>
    )
}

export default HomeLayour