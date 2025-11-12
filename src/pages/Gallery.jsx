import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async'



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
                <link rel="canonical" href="https://www.sinshini.ir/gallery" />
                <meta property="og:title" content="سین‌شین - گالری" />
                <meta property="og:description" content="سین‌شین - گالری" />
                <meta property="og:url" content="https://www.sinshini.ir/gallery" />
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
                                <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                                    <img src="https://pagedone.io/asset/uploads/1713942989.png" alt="Gallery image" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"></img>
                                </div>
                                <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                                    <img src="https://pagedone.io/asset/uploads/1713943004.png" alt="Gallery image" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"></img>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                                <div className="h-[277px] w-full rounded-3xl">
                                    <img src="https://pagedone.io/asset/uploads/1713943024.png" alt="Gallery image" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                                </div>
                                <div className="h-[277px] w-full rounded-3xl">
                                    <img src="https://pagedone.io/asset/uploads/1713943039.png" alt="Gallery image" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                                </div>
                                <div className="h-[277px] w-full rounded-3xl">
                                    <img src="https://pagedone.io/asset/uploads/1713943054.png" alt="Gallery image" className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
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