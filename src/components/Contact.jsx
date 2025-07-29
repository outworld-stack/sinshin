import React from 'react'
import { Routes ,Route ,Link } from 'react-router'


export default function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <div className='flex flex-col gap-y-5 mt-10'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
        </div>
    </div>
  )
}
