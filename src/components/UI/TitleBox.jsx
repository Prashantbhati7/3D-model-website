import React from 'react'

const TitleBox = ({heading, title, link = "#"}) => {
  return (
    <div className='title'>
         <a href={link} id={title} className='cursor-pointer heading block transition-colors'>{heading}</a>
    </div>
  )
}

export default TitleBox
