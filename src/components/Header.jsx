import React from 'react'
import { Link  } from 'react-router'


export default function Header() {
  return (
    <div>
          <header className="flex items-center justify-center p-10  w-full border-b border-b-slate-100">

              <div className='flex items-center justify-between mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]'>
                  {/* کلمه سین شین  */}
                  <Link to={"/sinshin/"} className="relative inline-block before:absolute  before:-inset-1.5 sm:before:-inset-2.5 before:block before:skew-y-3 before:bg-pink-500">
                      <span className="relative font-MorabbaBold text-xl sm:text-4xl select-none text-white">
                          سین شین
                      </span>
                      <div className="absolute w-96  h-64 -top-24 -right-32 bg-yellow-100 dark:bg-blue-400 opacity-15 dark:opacity-20 blur-2xl dark:blur-[220px] rounded-full  -z-10">
                      </div>
                  </Link>
                  <div className='mr-10 sm:mr-20 flex items-center gap-x-5 sm:gap-x-10 text-gray-800'>

                    <Link to={"/sinshin/products"} className='font-DanaMedium'>
                        محصولات
                    </Link>

                    <Link to={"/sinshin/articles"} className='font-DanaMedium'>
                        مقالات
                    </Link>

                    <Link to={"/sinshin/aboutus"} className='font-DanaMedium'>
                        درباره‌ما
                    </Link>

               

                  </div>
              </div>

          </header>
    </div>
  )
}
