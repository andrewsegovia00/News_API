import React from 'react'
import { Link } from "react-router-dom"

function TitleCards({ props }) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-8 md:gap-10 p-8 px-7 sm:px-14 '>
  {props.map((cards) => (
    <div className="relative flex justify-center " key={cards.num}>
      <a className="block w-full h-60 sm:h-80 rounded-2xl overflow-hidden" href={`${cards.name}`}>
      <img className="sm:center rounded-2xl brightness-50 object-cover w-full h-60 sm:h-80" src={cards.icon} alt={cards.id} />
      </a>
      <div className="absolute bottom-4 lg:left-8 text-white font-medium p-2 z-10 text-xl lg:text-4xl sm:text-2xl left-1 sm:bottom-2 uppercase">{cards.name}</div>
    </div>
  ))}
</div>

  )
}

export default TitleCards
