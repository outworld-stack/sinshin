import React,{useState} from 'react'
import { Routes ,Route,Link  } from 'react-router'


export default function Product(props) {

const BASE_URL = import.meta.env.BASE_URL;
    
  return (
    <div>
        <div className=" p-2 md:p-5 bg-red-50/50 border border-gray-200 hover:shadow-sm shadow-gray-200 rounded-2xl">
        
            <Link to={`/sinshin/product/${props.id}`}>

                {/* عکس و درصد تخفیف  */}
                <div className="relative mb-2  md:mb-5">
                    <img className='mx-auto rounded-xl' src={BASE_URL+props.cover} loading="lazy" alt="P 1" />
                    { props.offer != 0 &&
                        <div className="absolute top-1.5 right-1.5 block h-5 md:h-[30px] text-xs/[22px] md:text-base/[34px] px-2.5 md:px-3.5 font-DanaDemiBold bg-pink-400 text-white dark:text-zinc-700 rounded-full ">
                            <span>
                                {props.offer}
                            </span>
                            %
                        </div>
                    }
                </div>

                {/* نام محصول  */}
                <h5 className="font-DanaMedium sm:font-DanaDemiBold text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">

                    <div  className='mr-5'>{props.title}</div>

                </h5>

                {/* امتیاز دهی  */}
                <div className="flex flex-row-reverse items-center justify-between">
                    <div className="flex  text-yellow-400">


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6 text-gray-300 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg> */}


                    </div>
                    {/* <div className="text-gray-700 text-xs md:text-sm lg:text-base 2xl:text-lg">
                        <span className="font-DanaMedium">4.3</span>
                        <span className="font-DanaRegular">
                            (<span>25</span>)
                        </span>
                    </div> */}

                </div>
            </Link>
                {/* باکس خرید و قیمت  */}
                <div className="flex justify-between items-center mt-5 border-t border-gray-300 pt-2">

                    {/* ایکون خرید  */}
                    <span className="flex group items-center justify-center mt-0.5 w-[26px] md:w-9 h-[26px] md:h-9 rounded-full transition-all bg-gray-100 text-gray-500 hover:text-gray-700 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-[22px] h-4 md:h-[22px] group-active:hidden group-hover:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="hidden group-active:block group-hover:block text-gray-700 text-[7px] md:text-xs font-DanaRegular mx-auto md:mr-2">
                            غیر فعال
                        </span>

                    </span>

                    {/* قیمت و تخفیف احتمالی اعمال شده  */}
                    <div className="flex  gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-3.5">
                        <div className={`${props.offer !=0 ? 'offer' : ''}`}>
                            <span className="font-DanaMedium text-xs md:text-xl tracking-tighter">{props.price}</span>
                            {
                                props.offer ==0 &&
                                <span className="sm:font-DanaDemiBold font-MorabbaLight text-sm ">ریال</span>
                            }
                        </div>
                        {
                            props.offer !=0 &&
                            <div className="text-pink-600">
                                <span className="font-DanaMedium text-xs md:text-xl tracking-tighter">{props.price}</span>
                                <span className="font-DanaMedium lg:font-DanaDemiBold  text-sm ">ریال</span>
                            </div>
                        }
                    </div>


                </div>

        </div>
    </div>
  )
}
