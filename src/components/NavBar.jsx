import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="nav-landscape py-2  "> 
           <div  style={{paddingLeft:'2rem'}}> 
            <p  className='text-white  text-shadow-2xs hover:text-shadow-pink-500 cursor-pointer '> PAW <p style={{paddingLeft:'1rem' }}> walk</p></p>
           </div>
      </nav>
    </div>
  )
}

export default NavBar
