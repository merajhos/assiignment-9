import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  { 
    title: "Bring Nature Home", 
    slogan: "Discover the perfect indoor plant for your space.", 
    bgClass: "bg-green-200", 
    imgUrl: "https://up.yimg.com/ib/th/id/OIP.bvaGVVukiS8Uo_8I8LjVWwHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102" 
  },
  { 
    title: "Green Care Made Simple", 
    slogan: "Expert tips for thriving plants, every day.", 
    bgClass: "bg-teal-200", 
    imgUrl: "https://tse3.mm.bing.net/th/id/OIP.yKvj0DdjzSuIhgY8NZPJ0QHaGL?pid=Api&P=0&h=220" 
  },
  { 
    title: "Air Purifying Power", 
    slogan: "Breathe cleaner air with our top filter plants.", 
    bgClass: "bg-blue-200", 
    imgUrl: "https://tse2.mm.bing.net/th/id/OIP.kk6RY3yTJcn4E4-OmA6R7wHaD3?pid=Api&P=0&h=220" 
  },
  { 
    title: "Seasonal Greenery", 
    slogan: "Plants that thrive in every season of the year.", 
    bgClass: "bg-orange-200", 
    imgUrl: "https://tse1.mm.bing.net/th/id/OIP.9Ee-oS-VBO9bH-cGTIR7VQHaFP?pid=Api&P=0&h=220" 
  },
  { 
    title: "The Gift of Growth", 
    slogan: "Find the perfect plant gift for any occasion.", 
    bgClass: "bg-pink-100", 
    imgUrl: "https://tse4.mm.bing.net/th/id/OIP.oJ7W704Uemrlm9wcEFGjEQHaE8?pid=Api&P=0&h=220" 
  },
  { 
    title: "Low Light, Big Impact", 
    slogan: "Beautiful plants that need minimal sunlight.", 
    bgClass: "bg-gray-200", 
    imgUrl: "https://tse2.mm.bing.net/th/id/OIF.f6dtBFpalaSmA4QqSxvG5Q?pid=Api&P=0&h=220" 
  },
  { 
    title: "Transform Your Workspace", 
    slogan: "Boost productivity with desk-friendly plants.", 
    bgClass: "bg-indigo-200", 
    imgUrl: "https://tse2.mm.bing.net/th/id/OIP.NgdC8LapGjxDnI485qITvAHaEJ?pid=Api&P=0&h=220" 
  },
  { 
    title: "Cactus & Succulent Corner", 
    slogan: "Hardy, sculptural plants for the modern home.", 
    bgClass: "bg-red-100", 
    imgUrl: "https://tse4.mm.bing.net/th/id/OIP.bOa21V74ncTPEuDQK727ZAHaEK?pid=Api&P=0&h=220" 
  }
];

 const HeroSection = ()=> {
  return (
    <section className="h-[70vh] w-full  ">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full "
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-start p-12" style={{backgroundImage: `url(${slide.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/20 "></div> 
            
            <div className="z-10 text-white max-w-lg lg:max-w-2xl text-center mx-auto mt-25">
              <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">{slide.title}</h2>
              <p className="text-xl drop-shadow-lg">{slide.slogan}</p>
              <button type='button' className="mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                Shop Now 
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default HeroSection;