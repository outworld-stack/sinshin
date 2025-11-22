import { useParams } from 'react-router'
import { Swiper, SwiperSlide } from "swiper/react";
import Datas from '../datas/ArticlesData';
import { Helmet } from 'react-helmet-async'



// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

function MainArticleData() {

  let params = useParams();

  let MainArticleData = Datas.find(article => article.id == params.id);
  // let MainArticleTag = MenusData.find(menu => menu.tag == MainProductData.tag);


  const BASE_URL = import.meta.env.BASE_URL;


  return (
    <>
      <Helmet>
        <title>{`سین‌شین - ${MainArticleData.title}`}</title>
        <meta name="description" content={MainArticleData.simpleDescription.slice(0,160) + '.....'} />
        <link rel="canonical" href={`https://www.sinshin-foodpark.ir/article/${params.id}`} />
        <meta property="og:title" content={`سین‌شین - ${MainArticleData.title}`} />
        <meta property="og:description" content={MainArticleData.simpleDescription.slice(0,160) + '.....'} />
        <meta property="og:url" content={`https://www.sinshin-foodpark.ir/article/${params.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={MainArticleData.images[0]} />
        <meta property="article:section" content={MainArticleData.category} />
        <meta property="article:published_time" content={MainArticleData.publisherDate} />
      </Helmet>
      <section className="mt-[5vh] md:mt-[10vh]">
        <div className="mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]">
          <div className="mb-6 relative bg-white  rounded-1xl shadow-sm pt-10 mt-[5vh] pb-8 md:px-16 px-5">

            {/* <!-- عنوان نام نویسنده تاریخ انتشار  --> */}
            <figure className="max-w-screen-sm ">
              <blockquote>
                <p className="text-2xl font-DanaMedium text-gray-800">
                  {MainArticleData.simpleDescription}
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-6 space-x-4">
                {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"></img> */}
                <div className="flex items-center divide-x-2 divide-gray-300">
                  <cite className="pe-2 font-DanaMedium text-sm text-gray-500">
                    ادمین
                  </cite>
                  <cite className="px-2 font-DanaMedium text-sm text-gray-500">
                    نویسنده در سین شین
                  </cite>
                  <cite className="px-2 font-DanaMedium text-sm text-gray-500">
                    {MainArticleData.publisherDate.slice(0, 4)}/{MainArticleData.publisherDate.slice(4, 6)}/{MainArticleData.publisherDate.slice(6, 8)}
                  </cite>
                </div>
              </figcaption>
            </figure>

            {/* <!-- متن مقاله  --> */}
            <div className="mb-6">

              {/* <!-- عنوان مقاله  --> */}
              <div className="relative">
                <h1 className="mt-[10vh] md:mt-[5vh] bg-gradient-to-l from-yellow-500  to-orange-500 bg-clip-text text-transparent font-DanaDemiBold md:text-4xl sm:text-3xl text-xl mb-5 md:leading-40 sm:text-right text-center">
                  {MainArticleData.title}
                </h1>
                <div className="hidden lg:block absolute top-35 -right-20 translate-x-2/3 -translate-y-[60%] w-80 h-80 bg-green-300 opacity-20 blur-[125px] z-10 rounded-full"></div>
              </div>

              {/* <!-- متن مقاله به همراه توضیحات طلایی و عکس های مربوط  --> */}

              <div className="content-area text-gray-800 px-8 py-2 rounded-lg overflow-hidden">

                {/* <!-- مراحل ساخت  --> */}
                <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  {
                    MainArticleData.steps.map(item => {
                      return (
                        <li key={item.id}>
                          <span className="font-DanaDemiBold">
                            {item.name}
                          </span>
                          <ol className="font-DanaRegular ps-5 mt-2 space-y-1 list-decimal list-inside">
                            {item.title}
                          </ol>
                        </li>
                      )
                    })
                  }

                </ul>

                {/* <!-- Swiper --> */}
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  initialSlide={2}
                  speed={500}
                  loop={true}
                  rotate={`${true}`}
                  mousewheel={{
                    invert: true
                  }}
                  keyboard={{
                    enabled: true
                  }}
                  pagination={true}
                  modules={[EffectCards]}
                  className="mySwiper w-70 col-span-1 lg:w-100 h-112 order-1 md:order-2 mt-[10vh] "
                >
                  {MainArticleData.images.map((src, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={BASE_URL + src} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                      </SwiperSlide>
                    )
                  })}


                </Swiper>
                {/* <div className="swiper mySwiper mt-[5vh] swiper-initialized swiper-horizontal swiper-rtl swiper-backface-hidden">
                <div className="swiper-wrapper *:flex *:items-center *:justify-center " id="swiper-wrapper-e9c3e1cbd72516fe" aria-live="polite">
                  <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-A.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                  <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-B.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                  <div className="swiper-slide" role="group" aria-label="3 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-C.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                  <div className="swiper-slide" role="group" aria-label="4 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-D.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                  <div className="swiper-slide" role="group" aria-label="5 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-E.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                  <div className="swiper-slide" role="group" aria-label="6 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-F.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                  <div className="swiper-slide" role="group" aria-label="7 / 7" style="width: 1336px;">
                    <img src="./dist/images/article-pizza-1-G.jpg" className="object-cover block w-full h-full" alt="">
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic" style="width: 80px;"><span className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" aria-current="true" style="right: 32px;"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active-next" style="right: 32px;"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active-next-next" style="right: 32px;"></span><span className="swiper-pagination-bullet" style="right: 32px;"></span><span className="swiper-pagination-bullet" style="right: 32px;"></span><span className="swiper-pagination-bullet" style="right: 32px;"></span><span className="swiper-pagination-bullet" style="right: 32px;"></span></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div> */}

              </div>


              {/* <!-- نکات طلایی  --> */}
              <div className="relative">
                <h1 className="mt-[10vh] md:mt-[5vh] bg-gradient-to-l from-yellow-500  to-orange-500 bg-clip-text text-transparent font-DanaDemiBold md:text-4xl sm:text-3xl text-xl mb-5 md:leading-40 sm:text-right text-center">
                  نکات طلایی
                </h1>
                <div className="hidden lg:block absolute top-35 -right-20 translate-x-2/3 -translate-y-[60%] w-80 h-80 bg-green-300 opacity-20 blur-[125px] z-10 rounded-full"></div>
              </div>

              {/* <!-- بیان نکته های طلایی  --> */}
              <div className="content-area text-gray-800 px-8 py-2 rounded-lg overflow-hidden">
                {/* <!-- نتیجه گیری و نکات طلایی  --> */}
                <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  {
                    MainArticleData.tips.map(item => {
                      return (
                        <li key={item.id}>
                          <span className="font-DanaDemiBold">
                            {item.name}
                          </span>
                          <ol className="font-DanaRegular ps-5 mt-2 space-y-1 list-decimal list-inside">
                            {item.title}
                          </ol>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>


              {/* <!-- موارد تکمیلی  --> */}
              <div className="relative">
                <h1 className="mt-[10vh] md:mt-[5vh] bg-gradient-to-l from-yellow-500  to-orange-500 bg-clip-text text-transparent font-DanaDemiBold md:text-4xl sm:text-3xl text-xl mb-5 md:leading-40 sm:text-right text-center">
                  موارد تکمیلی
                </h1>
                <div className="hidden lg:block absolute top-35 left-0 translate-x-2/3 -translate-y-[60%] w-80 h-80 bg-green-300 opacity-20 blur-[125px] z-10 rounded-full"></div>
              </div>

              {/* <!-- بیان موارد تکمیلی   --> */}
              <div className="content-area text-gray-800 px-8 py-2 rounded-lg overflow-hidden">
                {/* <!-- نتیجه گیری و نکات طلایی  --> */}
                <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">

                  {
                    MainArticleData.cases.map(item => {
                      return (
                        <li key={item.id}>
                          <span className="font-DanaDemiBold">
                            {item.name}
                          </span>
                          <ol className="font-DanaRegular ps-5 mt-2 space-y-1 list-decimal list-inside">
                            {item.title}<strong className="text-fuchsia-600">{item.Highlight}</strong>
                          </ol>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>

              {/* <!-- مواد استفاده شده  --> */}
              <div className="grid divide-y divide-neutral-200 rounded-lg border my-10 border-gray-200 p-5">

                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center h-10">
                      <span className="text-gray-700 font-DanaDemiBold text-lg select-none">
                        مواد مصرف شده
                      </span>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-700 w-5 h-5 transition group-open:rotate-180">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>

                    </summary>
                    <p className="text-neutral-600  group-open:animate-fadeIn">
                    </p>

                    <div className="flex flex-col items-start gap-y-1">

                      {
                        MainArticleData.includes.map(item => {
                          return (
                            <div key={item.id} className="flex items-center gap-x-1.5 mt-5 text-gray-900">
                              <span className="px-2 py-[1px]  bg-secendary rounded-3xl font-DanaMedium">
                                {item.name}
                              </span>
                              <span className="font-DanaRegular">
                                {item.Highlight}
                              </span>
                            </div>
                          )
                        })
                      }

                    </div>

                    <p></p>
                  </details>
                </div>

              </div>


            </div>
            <hr className="border-gray-300 border-opacity-20  mb-5"></hr>

            {/* <!-- تگ و لینک کوتاه  --> */}
            <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between">
              <div className="flex items-center px-5 border border-gray-300 border-opacity-20 hover:bg-gray-400 hover:text-white p-2 rounded-lg text-gray-300 ">
                <span className="hashtag font-DanaMedium">
                  {MainArticleData.tag2}
                </span>
              </div>

            </div>
            <div className="hidden lg:block absolute top-30 left-0 translate-x-1/3 -translate-y-[60%] w-60 h-60 bg-amber-300 opacity-25 blur-[125px] z-10 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainArticleData