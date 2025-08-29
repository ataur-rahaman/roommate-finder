import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])

  return (
    <div className='flex flex-col items-center justify-center py-[100px] bg-[#E7F6FD]'>
        <h1 className='text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-[50px]'>Find a Roommate Who <span className='text-[#0EA5E9]'>Fits Your Life</span></h1>
        <div className="embla max-w-5xl rounded-3xl shadow-xl cursor-grab" ref={emblaRef}>
        <div className="embla__container rounded-3xl">
            <div className="embla__slide"><img className='rounded-3xl' src="https://i.ibb.co.com/pBtVpVR8/banner1.webp" alt="banner-1" /></div>
            <div className="embla__slide"><img className='rounded-3xl' src="https://i.ibb.co.com/PZzM607t/banner2.webp" alt="banner-2" /></div>
            <div className="embla__slide"><img className='rounded-3xl' src="https://i.ibb.co.com/sTx4grz/banner3.webp" alt="banner-3" /></div>
        </div>
        </div>
    </div>
  )
}