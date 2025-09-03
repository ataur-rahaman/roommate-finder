import React, { use } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ThemeContext } from '../theme/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';

export function EmblaCarousel() {
  const {theme} = use(ThemeContext);
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])

  return (
    <div className={`flex flex-col items-center justify-center py-[50px] md:py-[100px] px-2 ${theme === "light" ? "bg-[#E7F6FD]" : "bg-gray-900"}`}>
        <h1 className={`text-4xl ${theme === "light" ? "text-black" : "text-white"} text-center md:text-5xl font-extrabold leading-tight tracking-tight mb-[50px]`}>Find a Roommate Who - <span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>
                  
                  <Typewriter
                    words={['Fits Your Life', 'is responsible', 'is polite', 'is super cool']}
                    loop={30}
                    cursor
                    cursorStyle='>'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
        </h1>
        <div className="embla max-w-7xl rounded-3xl shadow-xl cursor-grab" ref={emblaRef}>
        <div className="embla__container rounded-3xl">
            <div className="embla__slide"><img className='rounded-3xl' src="https://i.ibb.co.com/pBtVpVR8/banner1.webp" alt="banner-1" /></div>
            <div className="embla__slide"><img className='rounded-3xl' src="https://i.ibb.co.com/PZzM607t/banner2.webp" alt="banner-2" /></div>
            <div className="embla__slide"><img className='rounded-3xl' src="https://i.ibb.co.com/sTx4grz/banner3.webp" alt="banner-3" /></div>
        </div>
        </div>
    </div>
  )
}