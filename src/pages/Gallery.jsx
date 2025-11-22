import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async'
import gallery1 from '/images/gallery1.jpg';
import gallery2 from '/images/gallery2.jpg';
import gallery3 from '/images/gallery3.jpg';
import gallery4 from '/images/gallery4.jpg';
import gallery5 from '/images/gallery5.jpg';




function Gallery() {

    const [srcImg, setSrcImg] = useState(null)

    const lightboxImage = useRef();
    const lightbox = useRef();


    const handleGalleyClick = e => {
        if (e.target.classList.contains('gallery-image')) {
            lightboxImage.current.src = e.target.src;
            setSrcImg(lightboxImage.current.src)
            lightbox.current.style.display = 'flex';
        }
    }

    const handleCloseButtonClick = e => {
        lightbox.current.style.display = 'none';
        setSrcImg(null)
    }

    const handleclickBoxClick = e => {
        if (e.target.className == "lightbox") {
            lightbox.current.style.display = 'none';
            setSrcImg(null)
        }
    }


    return (

        <>
            <Helmet>
                <title>سین‌شین - گالری</title>
                <meta name="description" content="سین‌شین - گالری" />
                <link rel="canonical" href="https://www.sinshin-foodpark.ir/gallery" />
                <meta property="og:title" content="سین‌شین - گالری" />
                <meta property="og:description" content="منوی سین شین" />
                <meta property="og:url" content="https://www.sinshin-foodpark.ir/gallery" />
                <meta property="og:type" content="gallery" />
                <meta property="og:image" content="" />
                <meta property="article:section" content="" />
                <meta property="article:published_time" content="" />
            </Helmet>
            <section className="py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid gap-2.5 lg:pb-16 pb-10">
                        <h2 className="w-full text-center text-gray-900 text-4xl font-DanaDemiBold font-manrope leading-normal">
                            سین شین ما
                        </h2>
                        <div className="w-full text-center text-gray-600 text-lg font-DanaMedium leading-8">
                            با محیطی آرام آرامش چشیدن طعم غذای لذت ما را تجربه کنید
                        </div>
                    </div>
                    <div className="gallery" onClick={handleGalleyClick}>
                        <div className="flex flex-col mb-10">
                            <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
                                <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-2xl">
                                    <img src={gallery1} alt="Gallery image1  sinshin-foodpark.ir" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"></img>
                                </div>
                                <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                                    <img src={gallery2} alt="Gallery image2  sinshin-foodpark.ir" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"></img>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="h-[277px] w-full rounded-3xl">
                                    <img src={gallery3} alt="Gallery image3  sinshin-foodpark.ir" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                                </div>
                                <div className="h-[277px] w-full rounded-3xl">
                                    <img src={gallery4} alt="Gallery image4  sinshin-foodpark.ir" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                                </div>
                                <div className="h-[277px] w-full rounded-3xl">
                                    <img src={gallery5} alt="Gallery image5  sinshin-foodpark.ir" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lightbox" style={{ display: 'none' }} ref={lightbox} onClick={handleclickBoxClick}>
                    <span className="close" onClick={handleCloseButtonClick}>&times;</span>
                    <img src={null} alt="" ref={lightboxImage} className="lightbox-image"></img>
                </div>

            </section>
        </>
    )
}

export default Gallery