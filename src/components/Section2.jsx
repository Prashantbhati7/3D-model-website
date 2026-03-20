import React from 'react'
import TitleBox from './UI/TitleBox'

const Section2 = () => {
  return (
    <section id="sec2 " className="   text-white  min-h-screen ">
          <div className="images">
            <img id='tomorrowland' src="/background-1015.png" alt="1015" />
            <img id='navy-pier' src="/background-1016.png" alt="1016" />
            <img id='msi-chicago' src="/background-1017.png" alt="1017" />
            <img id='phone' src="/background-1018.png" alt="1018" />
          </div>
           <div className='titles'>
            <TitleBox title={'hire'} heading={'Hire a Walker'} link="/" /> 
            <TitleBox title={'becomewalker'} heading={'Become a Walker'} link="/" /> 
            <TitleBox title={'train'} heading={'Train Your Dog'} link="/" /> 
            <TitleBox title={'petsitting'} heading={'Occasional Pet Sitting'} link="/" />
            <TitleBox title={'browse'} heading={'Browse Available Walkers'} link="/" />
            <TitleBox title={'become-Petsitter'} heading={'Become a Pet Sitter'} link="/" />
            </div>
    </section>
  )
}

export default Section2
