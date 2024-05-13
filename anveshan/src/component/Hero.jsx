import React,{useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

function Hero() {

    // const [slides, setSlides ] = useState([
//     {
//         url:'//www.anveshan.farm/cdn/shop/files/anv_april__banner.jpg?v=1714740884&width=2400'
//     },
//     {
//         url:'//www.anveshan.farm/cdn/shop/files/homepage_2.jpg?v=1702899845&width=2400'
//     },
//     {
//         url:'//www.anveshan.farm/cdn/shop/files/anveshan-popcoinsbanner.jpg?v=1705558185&width=2400'
//     },
//     {
//         url:'//www.anveshan.farm/cdn/shop/files/anveshan-appDiscount.jpg?v=1705558186&width=2400'
//     },
//     {
//         url:'//www.anveshan.farm/cdn/shop/files/Artboard_1_10.jpg?v=1666961209&width=2400'
//     },
//     {
//         url:'//www.anveshan.farm/cdn/shop/files/anveshan-oils-banner.jpg?v=1706685459&width=2400'
//     },
// ];)
  
// setSlides(...,updatedValue)

const slides = [
    {
        url:'//www.anveshan.farm/cdn/shop/files/anv_april__banner.jpg?v=1714740884&width=2400'
    },
    {
        url:'//www.anveshan.farm/cdn/shop/files/homepage_2.jpg?v=1702899845&width=2400'
    },
    {
        url:'//www.anveshan.farm/cdn/shop/files/anveshan-popcoinsbanner.jpg?v=1705558185&width=2400'
    },
    {
        url:'//www.anveshan.farm/cdn/shop/files/anveshan-appDiscount.jpg?v=1705558186&width=2400'
    },
    {
        url:'//www.anveshan.farm/cdn/shop/files/Artboard_1_10.jpg?v=1666961209&width=2400'
    },
    {
        url:'//www.anveshan.farm/cdn/shop/files/anveshan-oils-banner.jpg?v=1706685459&width=2400'
    },
];

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
};

const nextSlide = () => {
const isLastSlide = currentIndex === slides.length-1;
const newIndex = isLastSlide ? 0 : currentIndex+1;
setCurrentIndex(newIndex);
};

  return (
    
    <div className='w-full h-[85vh] mt-11 relative group'>
    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500' ></div>

    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={20}/>
    </div>
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={20}/>
    </div>
  </div>
      
  );
}

export default Hero;
