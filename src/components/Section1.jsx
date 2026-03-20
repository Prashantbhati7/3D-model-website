import React from 'react'
import NavBar from './NavBar'

const Section1 = () => {
  return (
     <section id="sec1" className=" min-h-screen ">
          {/* <NavBar></NavBar> */}
          <div style={{paddingBlock:'3rem',zIndex:'4'}} className="upper gap-5 h-[60vh] flex w-full">
            <div className="left w-1/2 text-right text-[3.2rem] h-full font-extrabold text-blue-300 bg-clip-text ">
                  <div className="h-5 "> <p> Care for </p> <p>   Your Dog, Even </p> <p> When You’re </p> <p>Away </p> </div>
            </div>
            <div className="right w-1/2 f-full  "> </div>
            </div>
            <div className="lower flex gap-15 w-full mt-8">
              <div className="left w-1/2"></div>
              <div className="right w-1/2 flex flex-col gap-4"> 
                <p className=" text-left w-full text-2xl text-white font-extrabold drop-shadow-lg"> Loving Pet Care <br /> In Your Neighborhood  </p>
                <div className="text-left w-3/4 text-slate-200 font-medium text-lg mt-2 drop-shadow-md border-l-4 border-pink-500 pl-5 py-2 bg-white/5 backdrop-blur-sm rounded-r-xl">
                  Our goal is to connect passionate pet lovers with your furry friends for the safest and most joyful care possible. Whether you need a daily walker or occasional sitting, we've got you covered.
                </div>
              </div>
            </div>
              <div className="line flex ">
             <div className="firstline rotate-45  bg-red-500 text-left w-[45%] h-0.5  " >  </div>
           <div className="secondline bg-purple-400 w-[55%] h-0.5 " style={{position:'absolute',zIndex:'-10',rotate:'-30deg' , right:'1rem' ,top:'7rem'}} > </div>
          </div>

        </section>
  )
}

export default Section1
