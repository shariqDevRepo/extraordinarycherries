import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import  Autoplay from 'embla-carousel-autoplay';


interface ImageSliderProps {
  slides: string[]; // Assuming slides is an array of image URLs (strings)
}

const SliderSection: React.FC<ImageSliderProps> = ({ slides }) => {
 
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag:false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // autoplay plugin configuration
  );



  return (
    <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="embla__slide"
           
          >
            <div className="embla_slide_number">
              <div className="line"><img src="/nft-line.png" alt="" /></div>
              <img className='nft-image' src={slide} alt={`Slide ${index + 1}`}  style={{
              animation: `rotateImage-${index} 2s ease-in-out infinite`,
            }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SliderSection