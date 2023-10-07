import bannerPng from '../assets/pngwing.com (3).png'

const Banner = () => {
  return (
    <div>
 <div className="border h-[70vh] bg-white rounded-md mt-8 mb-10 flex  items-center">
<div className='w-3/6'>
<h1 className='text-6xl'>Rise of Sports <span className='text-3xl'>Events</span> </h1>
<p className='mt-4'>Dive into the world of competitive Sports tournaments</p>
</div>
<div className='w-3/6'>
  <img src={bannerPng} alt="" />
</div>



 </div>
    </div>
  );
};

export default Banner;
