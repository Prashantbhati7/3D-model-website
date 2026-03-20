import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full sticky top-0 z-50">
      <nav className="nav-landscape  py-4 px-8 w-full  border-b-2 border-slate-300/30"> 
        <div className="flex  justify-around w-full "> 
          {/* Logo Area */}
          <div className="cursor-pointer select-none flex items-center gap-2 group">
            {/* Optional Paw Icon can go here */}
            <div className="  font-bold tracking-wide">
              <span className="text-4xl text-transparent bg-clip-text bg-linear-to-r bg-white drop-shadow-[0_0_12px_rgba(245,158,11,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(245,158,11,0.9)] transition-all">Pet</span>
              <span className="text-4xl text-white ml-0.5 drop-shadow-md group-hover:text-slate-200 transition-colors">Walk</span>
            </div>
          </div>
          
          {/* Auth & Action Buttons */}
          <div className="flex gap-5 items-center font-['Outfit']">
            <button className="text-slate-200 font-medium transition-colors cursor-pointer text-[15px] tracking-wide">Log In</button>
            <button className="text-slate-200 font-medium transition-colors cursor-pointer text-[15px] tracking-wide">Sign Up</button>
            <div className="h-5 w-px bg-slate-400/40 mx-1"></div>
            <button className="text-slate-200  font-medium transition-colors cursor-pointer text-[15px] tracking-wide">Become a Walker</button>
            <button style={{paddingInline:'20px',paddingBlock:'8px'}} className="ml-3  text-white font-semibold rounded-full   cursor-pointer text-[15px] ">
              Hire a Walker
            </button>
            <button className="hidden text-slate-400 hover:text-red-400 font-medium transition-colors cursor-pointer text-[15px] tracking-wide ml-2">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
