import { useParams, Link } from 'react-router'
import { Swiper, SwiperSlide } from "swiper/react";
import Datas from '../datas/ProductsDatas'
import MenusData from '../datas/MenuData'
import { Helmet } from 'react-helmet-async'



// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


export default function MainProduct() {

    let params = useParams();

    let MainProductData = Datas.find(product => product.id == params.id);
    let MainProductTag = MenusData.find(menu => menu.tag == MainProductData.tag);


    let newArray = MainProductData.price.split(",");
    let newPriceString = newArray.join("");
    let newPriceNumber = Number(newPriceString) - Number(newPriceString) * (MainProductData.offer / 100);
    let newPrice = newPriceNumber.toLocaleString();
    const BASE_URL = import.meta.env.BASE_URL;


    return (
        <>
      <Helmet>
        <title>{`سین‌شین - ${MainProductData.title}`}</title>
        <meta name="description" content={MainProductData.explain.slice(0,160) + '...'} />
        <link rel="canonical" href={`https://www.sinshini.ir/product/${params.id}`} />
        <meta property="og:title" content={`سین‌شین - ${MainProductData.title}`} />
        <meta property="og:description" content={MainProductData.explain.slice(0,160) + '...'} />
        <meta property="og:url" content={`https://www.sinshini.ir/product/${params.id}`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={MainProductData.img[0]} />
        <meta property="article:section" content={MainProductData.category} />
        <meta property="article:published_time" content="2025-01-01T00:00:00+00:00" />
      </Helmet>
            <div>
                <section className="mt-[5vh] md:mt-[10vh] ">
                    <div className="container">

                        {/* نو بار بالای محصول  */}
                        <div className="breadcrumb">
                            <Link to={"/sinshin/"} className="breadcrumb__item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </Link>
                            <div className="breadcrumb__item">
                                <Link to={"/sinshin/Products"}>
                                    محصولات
                                </Link>
                            </div>
                            <div className="breadcrumb__item">
                                <span>
                                    {MainProductTag.title}
                                </span>
                            </div>
                            <div className="breadcrumb__item">
                                <span className='select-none'>
                                    {MainProductData.title}
                                </span>

                            </div>
                        </div>

                        {/* عنوان ، توضیحات وتخفیف و اسلایدر  */}
                        <div className="overflow-hidden relative mt-[5vh] grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-start">

                            {/* عنوان و توضیحات و تخفیف  */}
                            <div className="flex flex-col col-span-2 w-full  gap-y-5 items-center md:items-start justify-between order-2 md:order-1 2xl:max-w-190 md:max-w-90 xl:max-w-170 lg:max-w-130 text-center">
                                {/* عنوان و توضیحات  */}
                                <div className="flex flex-col items-start gap-y-5 max-md:mt-[5vh]">
                                    <span className="font-DanaDemiBold text-2xl textlink select-none">
                                        {MainProductData.title}
                                    </span>
                                    <p className="font-DanaRegular text-sm/6 text-justify indent-5 mx-5">
                                        {MainProductData.explain}
                                    </p>
                                </div>
                                {/* زمان تخفیف ، مقدار تخفیف + دکمه خرید و مبلغ  */}
                                <div className="flex flex-col items-start gap-y-5 w-full">
                                    {
                                        MainProductData.special == 1 &&

                                        <div className="flex flex-col sm:flex-row w-full mt-[3vh] gap-y-4 gap-x-10 justify-center p-5 bg-gradient-to-l from-gray-50 via-fuchsia-50/50 to-pink-50/50 rounded-lg">
                                            <div className="flex items-center justify-center gap-x-2 font-DanaDemiBold sm:text-xl lg:text-center xl:text-right text-pink-500">
                                                {/* <span>
                                            50%
                                        </span> */}
                                                <h5 className="bg-gradient-to-l from-yellow-500 to-orange-500 bg-clip-text font-extrabold text-transparent">
                                                    پیشنهاد شگفت انگیز
                                                </h5>
                                            </div>
                                            {/* <div className="flex items-center justify-center font-DanaRegular gap-x-5" data-timestamp="1739911800000">
                                        <div>
                                            <span className="day font-DanaMedium text-xl">6</span>
                                            روز
                                        </div>
                                        <div>
                                            <span className="hours font-DanaMedium text-xl">9</span>
                                            ساعت
                                        </div>
                                        <div>
                                            <span className="minutes font-DanaMedium text-xl">54</span>
                                            دقیقه
                                        </div>
                                        <div>
                                            <span className="seconds font-DanaMedium text-xl text-red-500">39</span>
                                            ثانیه
                                        </div>
                                    </div> */}
                                        </div>
                                    }
                                    <div className="w-full mt-[3vh] flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6">
                                        <button className="rounded-lg text-lg px-5 py-2 font-DanaMedium text-white bg-gradient-to-l from-pink-500 via-rose-500 to-red-500">
                                            با این قیمت نوش جان کن
                                        </button>
                                        <div className="flex items-end gap-x-2.5">

                                            {/* Offer */}
                                            {
                                                MainProductData.offer != 0 &&
                                                <span className="text-slate-500 font-DanaMedium dark:text-white/70 text-xl line-through">
                                                    {MainProductData.price}
                                                </span>
                                            }

                                            {/* Price */}
                                            <span className="font-DanaDemiBold text-2xl">
                                                {MainProductData.offer != 0 ? newPrice : MainProductData.price}
                                                <span className="font-DanaMedium text-lg">ریال</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* اسلایدر */}

                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                initialSlide={2}
                                speed={500}
                                loop={false}
                                rotate={`${true}`}
                                mousewheel={{
                                    invert: true
                                }}
                                keyboard={{
                                    enabled: true
                                }}
                                pagination={true}
                                modules={[EffectCards]}
                                className="mySwiper w-70 col-span-1 lg:w-100 h-112 order-1 md:order-2"
                            >
                                {MainProductData.img.map((src, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <img src={BASE_URL + src} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                                        </SwiperSlide>
                                    )
                                })}


                            </Swiper>





                        </div>


                    </div>

                </section>

                <section className="mt-[5vh] md:mt-[10vh]">
                    <div className="container grid grid-cols-1 xl:grid-cols-4 gap-x-5 gap-y-10 ">
                        <div className="flex items-center max-sm:justify-start gap-x-2 py-2 px-4 bg-pink-50 rounded-lg ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700 mr-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div className="flex flex-col itec justify-center  mr-2.5">
                                <span className="font-DanaMedium text-sm text-gray-700">
                                    زمان آماده سازی :
                                </span>
                                <div className="flex gap-x-2 mt-[1vh]">
                                    <span className="font-DanaMedium text-sm text-gray-700">
                                        {MainProductData.timeToPrepare}
                                    </span>
                                    <span className="font-DanaMedium text-sm text-gray-700 ">
                                        دقیقه
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center max-sm:justify-center  gap-x-2 py-2 px-4 bg-pink-50 rounded-lg">

                            <div className="flex flex-col justify-center items-center mr-2.5">


                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-cyan-700 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                </svg>
                            </div>

                            <div className="flex flex-col justify-center my-[2px] mr-2.5">


                                <div>
                                    {MainProductData.includes.length !== 0 && MainProductData.includes.map((item, index) => {
                                        return (
                                            <span key={index} className="font-DanaRegular text-sm text-gray-700">
                                                {item}{MainProductData.includes.length - 1 === index ? '' : ' , '}
                                            </span>
                                        )
                                    })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {
                    MainProductData.comments.length != 0 &&

                    <section className="mt-[5vh] md:mt-[10vh] mb-[15vh]">
                        <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">

                            <div className="flex items-center justify-center mb-5 gap-x-2 font-DanaDemiBold sm:text-xl lg:text-center xl:text-right text-pink-500">
                                {/* <span>
                            50%
                        </span> */}
                                <h5 className="bg-gradient-to-l from-blue-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">
                                    نظرات مردمی
                                </h5>
                            </div>

                            <div className="grid divide-y divide-neutral-200 rounded-lg border border-gray-200 p-5">

                                {MainProductData.comments.map(item => {
                                    return (

                                        <div key={item.id} className="py-5">

                                            <details className="group">

                                                <summary className="flex justify-between items-center h-10">
                                                    <span className="text-gray-700 font-DanaDemiBold text-lg">
                                                        {item.name} میگه:
                                                    </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-700 w-5 h-5 transition group-open:rotate-180">
                                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                                    </svg>
                                                </summary>

                                                <p className="text-neutral-600  group-open:animate-fadeIn">
                                                </p>

                                                <div className="flex flex-col items-start gap-y-1">

                                                    <div className="flex items-center gap-x-1.5 mt-5 text-gray-900">
                                                        <span className="px-2 py-[1px]  bg-secendary rounded-3xl font-DanaMedium">
                                                            {item.comment}
                                                        </span>
                                                    </div>

                                                </div>

                                            </details>

                                        </div>

                                    )

                                })}


                            </div>
                        </div>
                    </section>
                }
            </div>
        </>
    )
}
