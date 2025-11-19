import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden mt-[15vh] p-3 md:p-0 bg-red-50/30 dark:bg-slate-900">
            <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">
                <div className="flex flex-col pt-10">

                    {/* <!-- top  --> */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-between">
                        {/* <!-- right  --> */}
                        <div className="flex flex-col items-center lg:items-start ml-5 lg:ml-0 gap-y-5">
                            <h1 className="text-black dark:text-white text-base lg:text-xl font-DanaDemiBold">
                                سین شین
                            </h1>
                            <span className="max-w-xs text-justify text-base text-slate-500 dark:text-slate-400 font-DanaMedium">
                                سین شین یک کافه رستوران با کارکنانی پرانرژی و غذاهای خوشمزه
                                منتظر قدوم شما عزیزان است تا تجربه  لحظه ی ماندگار رو براتون ثبت کنیم
                            </span>
                            <h2 className='text-sm font-MorabbaMedium bg-gradient-to-l from-sky-500  to-emerald-500 bg-clip-text text-transparent '>
                                بندرانزلی ، کیلومتر یک پاسداران
                            </h2>
                            
                        </div>
                        {/* <!-- left  --> */}
                        <div className="flex items-start mt-10 lg:mt-0 justify-between gap-x-5 sm:gap-x-16 md:gap-x-24 lg:gap-x-32 ">

                            {/* <!-- دسترسی سریع  --> */}
                            <div className="flex flex-col flex-grow gap-y-5">
                                <span className="text-black dark:text-white text-base lg:text-xl font-DanaDemiBold">
                                    دسترسی سریع
                                </span>
                                <div className="flex flex-col gap-y-4">
                                    {/* <Link to="/Rules" className="text-slate-500 dark:text-slate-400 text-sm font-DanaMedium">
                                    قوانین و مقررات
                                </Link> */}
                                    <Link to="/AboutUs" className="text-slate-500 dark:text-slate-400 text-sm font-DanaMedium">
                                        درباره ما
                                    </Link>
                                    <Link to="/Gallery" className="text-slate-500 dark:text-slate-400 text-sm font-DanaMedium">
                                        گالری
                                    </Link>
                                </div>
                            </div>



                            {/* <!-- شبکه های اجتماعی  --> */}
                            <div className="flex flex-col flex-grow gap-y-5">
                                <span className="text-black dark:text-white text-base lg:text-xl font-DanaDemiBold">
                                    تماس با ما
                                </span>

                                {/* <!-- insta  --> */}
                                <div className="flex justify-start gap-x-2">
                                    <div className="rounded-full bg-pink-600/90 p-2 text-white flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <a href="https://www.instagram.com/sinshin_foodpark" target="_blank" className="text-slate-500 dark:text-slate-400 text-lg font-LuckiestGuy tracking-wider hover:text-textMain dark:hover:text-textMain">
                                        sinshin_foodpark@
                                    </a>
                                </div>

                                {/* <!-- telegram  --> */}
                                <div className="flex justify-start gap-x-2">
                                    <div className="rounded-full bg-sky-600/90 p-2 text-white flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <h3 className="select-none text-slate-500 dark:text-slate-400 text-lg font-LuckiestGuy tracking-wider hover:text-textMain dark:hover:text-textMain">
                                        013-44552313
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- buttom  --> */}
                    <div className="mt-10 border-t border-t-slate-300 dark:border-t-slate-500">

                        <div className="flex flex-col md:flex-row gap-y-5 items-center justify-between py-7">
                            {/* <!-- right  --> */}
                            <div className="flex items-center gap gap-x-2 text-slate-800 text-sm dark:text-white font-DanaMedium tracking-wide">
                                <span>
                                    ساخته شده با
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                                <span>
                                    در سین شین
                                </span>
                            </div>

                            {/* <!-- left  --> */}
                            <span className="text-slate-800 dark:text-white text-center text-sm lg:text-right font-DanaMedium tracking-wide">
                                کلیه حقوق مادی و معنوی سایت برای سین شین محفوظ است.
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
