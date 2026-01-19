import React from 'react'
import NavBar from './NavBar'

const Section1 = () => {
  return (
     <section id="sec1" className=" min-h-screen ">
          <NavBar></NavBar>
          <div style={{paddingBlock:'3rem',zIndex:'4'}} className="upper gap-5 h-[60vh] flex w-full">
            <div className="left w-1/2 text-right text-[3.2rem] h-full font-extrabold text-blue-300 bg-clip-text ">
                  <div className="h-5 "> <p> Care for </p> <p>   Your Dog, Even </p> <p> When You’re </p> <p>Away </p> </div>
            </div>
            <div className="right w-1/2 f-full  "> </div>
            </div>
            <div className="lower flex gap-15  w-full">
              <div className="left w-1/2"></div>
              <div className="right w-1/2"> 
                <p className=" text-left w-full text-2xl text-white font-extrabold"> Loving Pet Care <br /> In Your Neighbhorhood  </p>
              </div>
           </div>
              <div className="line flex ">
             <div className="firstline rotate-45  bg-red-500 text-left w-[55%] h-0.5  " >  line</div>
           <div className="secondline bg-purple-400 w-[55%] h-0.5 " style={{position:'absolute',zIndex:'-10',rotate:'-30deg' , right:'1rem' ,top:'7rem'}} > </div>
          </div>

        </section>
  )
}

export default Section1
