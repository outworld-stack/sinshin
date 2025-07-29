import React,{useState} from 'react'
import { Routes ,Route,Link  } from 'react-router'

export default function Article(props) {
    console.log(props);
    
  return (
    <div>
        <div class="flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-red-50/50 border border-gray-200 hover:shadow-sm shadow-gray-200  rounded-2xl">
            {/* <!-- عکس مقاله  --> */}
            <div class="relative w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-3xl overflow-hidden">
                <img src={props.coverImg} class="h-full sm:h-auto object-cover" alt="blog 1"></img>
            </div>
            <div class="w-full flex flex-col sm:flex-row items-start justify-between font-VazirLight md:font-VazirMedium">
                {/* <!-- عنوان مقاله به صورت لینک --> */}
                <Link to={`/article/${props.id}`} class="font-DanaMedium text-sm/7 mt-2.5 ml-1.5 sm:ml-0 sm:mt-0 md:text-lg line-clamp-2 max-w-[193px] text-zinc-700 dark:text-white">
                    {props.title}
                </Link>
                {/* <!-- جزییات مقاله مانند تاریخ و ایکون مطالعه در سایز بزرگ  --> */}
                <div class="hidden sm:flex gap-5">
                    <span class="hidden lg:block w-px h-[61px] bg-gray-200 dark:bg-white/10 "></span>
                    <div class="flex flex-col font-DanaDemiBold ml-[12px] lg:ml-[18px] -mt-1 text-pink-600 dark:text-pink-500 text-sm text-left">
                        <span class=" md:text-xl lg:text-2xl">{props.publisherDate2[2]}</span>
                        <span>{props.publisherDate2[1]}</span>
                        <span>{props.publisherDate2[0]}</span>
                    </div>
                </div>
                {/* <!-- جزییات مقاله مانند زمان انتشار و ایکون مطالعه در سایز موبایل  --> */}
                <div class="flex items-end font-DanaDemiBold w-full justify-between sm:hidden border-t border-t-gray-200 dark:border-t-white/10 pt-[18px] pb-1.5">
                    <div>
                        <span class=" text-pink-600 dark:text-pink-500 text-xs">{props.publisherDate2[2]}</span>
                        <span class=" text-pink-600 dark:text-pink-500 text-xs"> {props.publisherDate2[1]} </span>
                        <span class=" text-pink-600 dark:text-pink-500 text-xs">{props.publisherDate2[0]}</span>
                    </div>
                    <h4 class="flex items-center gap-x-1 ml-1.5 text-xs h-5 rounded-md pr-2.5 pl-2 bg-orange-200/50 text-orange-500">
                        {props.tag2}
                    </h4>
                </div>
            </div>
        </div>
    </div>
  )
}
