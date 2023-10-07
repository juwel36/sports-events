import bannerPng from '../assets/pngwing.com (3).png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <div>
 <div className="border lg:h-[70vh] bg-white rounded-md mt-8 mb-10 flex flex-col md:flex-row lg:flex-row  items-center p-10">
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='lg:w-3/6'>
<h1 className='text-6xl'>Rise of Sports <span className='text-3xl'>Events</span> </h1>
<p className='mt-4'>Dive into the world of competitive Sports tournaments</p>
</div>
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='lg:w-3/6'>
  <img src={bannerPng} alt="" />
</div>



 </div>
    </div>
  );
};

export default Banner;
