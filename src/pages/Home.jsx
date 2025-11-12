import { useState, useRef } from 'react'
import Textra from 'react-textra'
import { Link } from 'react-router'
import MenusData from '../datas/MenuData'
import Menu from '../components/Menu'
import ProductsDatas from '../datas/ProductsDatas'
import Product from '../components/Product'
import ArticlesData from '../datas/ArticlesData'
import Article from '../components/Article'
import { Helmet } from 'react-helmet-async'
import main from '/images/main.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home() {

  const [menus, setMenus] = useState(MenusData)
  const [products, setProducts] = useState([...ProductsDatas].reverse())
  const [articles, setArticles] = useState([...ArticlesData].reverse())



  const sliderRef = useRef(null);


  return (
    <>
      <Helmet>
        <title>سین‌شین </title>
        <meta name="description" content="سین شین، رستوران جذاب و مدرن ایرانی" />
        <link rel="canonical" href="https://www.sinshini.ir" />
        <meta property="og:title" content="سین شین" />
        <meta property="og:description" content="سین شین، رستوران ایرانی  و مدرن" />
        <meta property="og:url" content="https://www.sinshini.ir" />
        <meta property="og:type" content="homepage" />
        <meta property="og:image" content="https://www.sinshini.ir/images/main.png" />
        <meta property="article:section" content="رستوران" />
        <meta property="article:published_time" content="2025-03-01T10:00:00Z" />
      </Helmet>
      <div>

        <section className="flex items-center justify-center mt-[2vh] sm:mt-[5vh]  overflow-hidden">

          <div className="main-section-header relative mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%] h-[700px] md:drop-shadow-lg rounded-lg md:rounded-none md:rounded-br-[200px] overflow-hidden">

            <div className="p-10 xl:p-14 flex flex-col items-start">

              {/* <!-- کلمه سین شین  --> */}
              <span className="relative inline-block before:absolute before:-inset-3 before:block before:skew-y-3 before:bg-pink-500">
                <span className="relative font-MorabbaBold text-3xl sm:text-4xl select-none text-white">
                  سین شین
                </span>
              </span>

              {/* <!-- سفارش آنلاین غذا + عوض شدن کلمات  --> */}
              <div className="flex items-center mt-[13vh] sm:mt-[13vh] md:mt-[15vh] lg:mt-[22vh] text-2xl sm:text-4xl md:text-5xl">
                <div className="font-DanaRegular flex items-center">
                  <span className="">
                    تجربه لذت‌بخش
                  </span>

                  <Textra className="text-pink-500 font-da mt-1 mr-1 sm:mr-1.5  transition-all delay-75 ease-in-out" data={['پیتزا', 'سوخاری', 'پاستا', 'قهوه', 'کباب']} effect='topDown' duration={500} stopduration={1500} />

                  {/* <!-- <span className="font-LuckiestGuyRegular">hello</span> --> */}
                </div>
              </div>
              <Link to={"/sinshin/products"} role="tab"
                aria-controls="products"
                aria-selected="true" className='font-DanaRegular text-sm flex items-center justify-between max-sm:z-50 gap-x-2 p-3 px-4 text-white rounded-full bg-orange-400 mt-8 sm:mt-14'>

                دیدن محصولات

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>


              </Link>

            </div>

            <img src={main} alt="" className="absolute top-[310px] scale-150 -left-[50%] sm:top-[30%] sm:-left-[55%] sm:scale-125 md:scale-110 md:top-52 md:-left-[45%] lg:scale-100 lg:top-20 xl:top-12 lg:-left-[45%] xl:-left-[30%] overflow-x-clip" />


          </div>

        </section>

        <section className="mt-[8vh] sm:mt-[8vh]">

          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">
            {/* <!-- head  --> */}
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* <!-- right head  --> */}
              <div className="flex flex-col items-center lg:items-start justify-between gap-y-5">
                <div className="lg:flex items-center justify-stretch gap-x-3 hidden lg:visible">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-sm bg-pink-500"></div>
                  <span className="text-lg sm:text-3xl font-DanaDemiBold dark:text-white tracking-tight">
                    منوها
                  </span>
                </div>
                <span className="text-black/60 dark:text-gray-500 font-DanaMedium shadow-md shadow-pink-50 lg:shadow-none  bg-white lg:bg-transparent p-2 lg:p-0 rounded-lg lg:rounded-none text-base sm:text-xl">
                  دسته بندی محصولات
                </span>
              </div>
              {/* <!-- left head  --> */}
              <div className="mt-5 lg:mt-0 lg:relative top-[550px] lg:top-0 flex items-center justify-center gap-x-1.5 sm:gap-x-3">

                {/* <!-- swipers  --> */}

                {/* <!-- right SW  --> */}
                <div className="swiper-button-prev-custom flex items-center justify-center rounded-full p-2 drop-shadow-lg shadow-md shadow-pink-100 cursor-pointer swiper-button-disabled">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-9 h-5 sm:h-9 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>

                </div>


                {/* <!-- left SW  --> */}
                <div className="swiper-button-next-custom flex items-center justify-center rounded-full p-2 drop-shadow-lg shadow-md shadow-pink-100 cursor-pointer">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-9 h-5 sm:h-9 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>

                </div>

                {/* <!-- pinky effect background  --> */}
                <div
                  className="hidden lg:block absolute w-72  h-72 -top-48 -left-60 bg-pink-300 dark:bg-rose-400 opacity-15 dark:opacity-20 blur-2xl dark:blur-[190px] rounded-full -z-10">
                </div>
              </div>

            </div>

            <div className="mt-[4vh] overflow-hidden pb-15 relative">
              {
                menus.length > 0 ?
                  <Swiper
                    centeredSlides={false}
                    slidesPerView={2}
                    spaceBetween={1}
                    navigation={{
                      nextEl: '.swiper-button-next-custom',
                      prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{
                      clickable: true,
                      el: '.swiper-pagination',
                      type: 'bullets',
                    }}
                    breakpoints={{
                      1900: {
                        slidesPerView: 7,
                        spaceBetween: 10
                      },
                      1700: {
                        slidesPerView: 8,
                        spaceBetween: 1
                      },
                      1536: {
                        slidesPerView: 7,
                        spaceBetween: 1
                      },
                      1280: {
                        slidesPerView: 6,
                        spaceBetween: 5
                      },
                      1150: {
                        slidesPerView: 6,
                        spaceBetween: 1
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 2
                      },
                      550: {
                        slidesPerView: 3,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 5
                      },
                      750: {
                        slidesPerView: 4,
                        spaceBetween: 5
                      }
                    }}
                    slideToClickedSlide={true}
                    loop={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper relative"
                  >
                    <div className="swiper-wrapper w-full h-max pb-16 transition-all ease-in-out">
                      {
                        menus.map((menu, index) => (

                          <SwiperSlide key={index}>
                            <Menu key={menu.id} {...menu} />
                          </SwiperSlide>

                        ))
                      }
                    </div>
                    <div className="swiper-pagination"></div>


                  </Swiper>
                  :
                  <h2>Not Found Anything</h2>
              }
            </div>


          </div>

        </section>

        <section className="mt-[8vh] sm:mt-[8vh]">

          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">

            {/* <!-- head  --> */}
            <div className="flex items-center lg:items-end justify-between mb-5 md:mb-12">
              {/* <!-- سمت راست  --> */}
              <div className="flex flex-col items-center lg:items-start justify-between gap-y-5 ">
                <div className="lg:flex items-center justify-stretch gap-x-3 hidden lg:visible">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-sm bg-pink-500"></div>
                  <span className="text-lg sm:text-3xl font-DanaDemiBold  dark:text-white tracking-tight">
                    تازه ها
                  </span>
                </div>
                <span className="text-black/60 dark:text-gray-500 font-DanaMedium shadow-md lg:shadow-none shadow-pink-50  bg-white lg:bg-transparent p-2 lg:p-0 rounded-lg lg:rounded-none text-base sm:text-xl">
                  جدیدترین محصولات
                </span>
              </div>
              {/* <!-- سمت چپ  --> */}
              <Link to="/sinshin/products" className="flex items-center gap-x-3 shadow-md lg:shadow-none shadow-pink-50 hover:bg-red-50 p-2 rounded-xl text-black/60 hover:text-black/75">
                <span className="hidden md:inline-block font-DanaDemiBold">مشاهده همه محصولات</span>
                <span className="inline-block md:hidden font-DanaDemiBold">مشاهده همه</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

              </Link>
            </div>


            {/* <!-- باکس محصولات جدید  --> */}
            <div className="grid grid-cols-2 gap-x-3 sm:grid-cols-2 md:grid-cols-3 md:gap-x-5  xl:grid-cols-4 2xl:gap-x-10 justify-items-center gap-y-10 ">
              {products.slice(0, 4).map(product => (

                <Product key={product.id} {...product} />

              ))}
            </div>

          </div>

        </section>


        <section className="mt-[8vh] sm:mt-[8vh]">

          <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">

            {/* <!-- head  --> */}
            <div className="flex items-center lg:items-end justify-between mb-5 md:mb-12">
              {/* <!-- سمت راست  --> */}
              <div className="flex flex-col items-center lg:items-start justify-between gap-y-5 ">
                <div className="lg:flex items-center justify-stretch gap-x-3 hidden lg:visible">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-sm bg-pink-500"></div>
                  <span className="text-lg sm:text-3xl font-DanaDemiBold dark:text-white tracking-tight">
                    مقاله ها
                  </span>
                </div>
                <span className="text-black/60 dark:text-gray-500 font-DanaMedium shadow-md lg:shadow-none shadow-pink-50  bg-white lg:bg-transparent p-2 lg:p-0 rounded-lg lg:rounded-none text-base sm:text-xl">
                  جدیدترین مقالات
                </span>
              </div>
              {/* <!-- سمت چپ  --> */}
              <Link to="/sinshin/articles" className="flex items-center gap-x-3 shadow-md lg:shadow-none shadow-pink-50 hover:bg-red-50 p-2 rounded-xl text-black/60 hover:text-black/75">
                <span className="hidden md:inline-block font-DanaDemiBold ">مشاهده همه مطالب</span>
                <span className="inline-block md:hidden font-DanaDemiBold ">مشاهده همه</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

              </Link>
            </div>

            {/* <!-- باکس مقاله ها  --> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">

              {/* <!-- مقاله ها  --> */}
              {articles.map(article => (

                <Article key={article.id} {...article} />

              ))}

            </div>

          </div>

        </section>

      </div>
    </>

  )
}
