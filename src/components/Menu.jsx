import React from 'react'
import { Routes ,Route,Link  } from 'react-router'



export default function Menu(props) {
const BASE_URL = import.meta.env.BASE_URL;
    
  return (
      <div class="bg-gradient-to-bl mx-auto from-slate-100 via-gray-100 to-pink-100 rounded-xl h-44 w-40 flex flex-col justify-between items-center">
          <img src={BASE_URL+props.img} alt="" class="w-28 h-28 select-none" />
          <span class="text-2xl font-DanaMedium text-gray-800 mb-4">
              {props.title}
          </span>
      </div>
  )
}
