import React from 'react'


export default function Menu(props) {
const BASE_URL = import.meta.env.BASE_URL;
    
  return (
      <div className="bg-gradient-to-bl mx-auto from-slate-100 via-gray-100 to-pink-100 rounded-xl h-44 w-40 flex flex-col justify-between items-center">
          <img src={BASE_URL+props.img} alt="" className="w-28 h-28 select-none" />
          <span className="text-2xl font-DanaMedium text-gray-800 mb-4">
              {props.title}
          </span>
      </div>
  )
}
