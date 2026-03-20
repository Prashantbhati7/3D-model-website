import React from 'react'

const Section3 = () => {
  return (
     <section id="sec3" className=" h-screen ">
          <div className="flex gap-15 w-full h-full  ">
            <div className="left w-1/2"></div> 
            <div className="right h-full w-1/2 flex flex-col justify-center px-10"> 
                  <div className="font-serif font-extrabold text-4xl text-white mb-8 drop-shadow-lg" > 
                      <div> <div> Why you should  </div> <div className="text-pink-400 mt-2">hire a walker?</div>  </div>
                  </div>
                  
                  <div className="flex flex-col gap-7 w-4/5">
                    <div style={{paddingBlock:'1rem',paddingInline:'1rem'}} className="bg-white/10  backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-default shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🐕 Professional Care</h3>
                      <p className="text-slate-300 text-sm font-medium">Experienced walkers ensure your dog gets the right amount of exercise and mental stimulation.</p>
                    </div>
                    
                    <div style={{paddingBlock:'1rem',paddingInline:'1rem'}} className="bg-white/10 py-3.5 px-5 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-default shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">⏰ Flexible Scheduling</h3>
                      <p className="text-slate-300 text-sm font-medium">Book walks on demand or set a recurring schedule that perfectly fits your busy lifestyle.</p>
                    </div>
                    
                    <div style={{paddingBlock:'1rem',paddingInline:'1rem'}} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-default shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">☮️ Peace of Mind</h3>
                      <p className="text-slate-300 text-sm font-medium">Receive real-time updates, photos, and GPS tracking so you always know your best friend is safe.</p>
                    </div>
                  </div>
            </div>
          </div>
        </section>
  )
}

export default Section3
