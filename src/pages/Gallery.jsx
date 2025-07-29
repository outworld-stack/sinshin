import React, { useEffect, useRef,useState } from 'react'



function Gallery() {

    const [srcImg,setSrcImg] = useState(null)

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

        <section class="py-24 ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div class="grid gap-2.5 lg:pb-16 pb-10">
                    <h2 class="w-full text-center text-gray-900 text-4xl font-DanaDemiBold font-manrope leading-normal">
                        سین شین ما
                    </h2>
                    <div class="w-full text-center text-gray-600 text-lg font-DanaMedium leading-8">
                        با محیطی آرام آرامش چشیدن طعم غذای لذت ما را تجربه کنید
                    </div>
                </div>
                <div class="gallery" onClick={handleGalleyClick}>
                    <div class="flex flex-col mb-10">
                        <div class="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
                            <div class="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                                <img src="https://pagedone.io/asset/uploads/1713942989.png" alt="Gallery image" class="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"></img>
                            </div>
                            <div class="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                                <img src="https://pagedone.io/asset/uploads/1713943004.png" alt="Gallery image" class="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"></img>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
                            <div class="h-[277px] w-full rounded-3xl">
                                <img src="https://pagedone.io/asset/uploads/1713943024.png" alt="Gallery image" class="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                            </div>
                            <div class="h-[277px] w-full rounded-3xl">
                                <img src="https://pagedone.io/asset/uploads/1713943039.png" alt="Gallery image" class="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                            </div>
                            <div class="h-[277px] w-full rounded-3xl">
                                <img src="https://pagedone.io/asset/uploads/1713943054.png" alt="Gallery image" class="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lightbox" style={{display:'none'}} ref={lightbox} onClick={handleclickBoxClick}>
                <span class="close" onClick={handleCloseButtonClick}>&times;</span>
                <img src={null} alt="" ref={lightboxImage}  class="lightbox-image"></img>
            </div>

        </section>
    )
}

export default Gallery