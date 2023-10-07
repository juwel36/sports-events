import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import img1 from '../../assets/shutterstock_320584622.jpg'
import img2 from '../../assets/B5-taken-from-Leverage-Edu-Sports-Management-Courses.jpg'
import img3 from '../../assets/sport_manage.jpeg-900x510.jpg'
import { FaCalendarCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

const Bloges = () => {
  const blogdata = useLoaderData()
  const [expanded, setexpanded] = useState(false);
  const toggleContent = () => {
    setexpanded(!expanded);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <div className=" flex flex-col lg:flex-row gap-3" >
      <div className=" text-white lg:w-4/6">
        <p className="text-2xl text-center mb-10 font-semibold ">Blogs</p>
        <div  className=" mb-10 grid grid-cols-1 gap-10">
          {blogdata.map((data, idx) => (
            <div key={idx}>
              <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="card card-compact  shadow-xl">
                <figure  className="relative">
                  <img className="h-72 w-full" src={data.image_url} alt="image" />
                  <div className="absolute top-2  left-2  bg-green-400 p-3">
                    <p className="text-black">  {data.date}</p>
                  </div>
                </figure>

                <div className="card-body">
                  <h2 className=" text-2xl font-mono">{data.title}</h2>
                  <div className="">
                    <p>{expanded ? data.content : `${data.content.slice(0, 200)}...`}</p>
                    
                  {data.content.length > 40 && (
                    <button
                      onClick={toggleContent}
                      className="text-green-400 underline"
                    >
                      {expanded ? "Show Less" : "Show All"}
                    </button>
                  )}
                  </div>


                  <div className="flex items-center gap-8 my-4">
                    <div  className="flex items-center gap-3">   <img className="w-11 rounded-full" src={data.profile_picture} alt="" />
                      <p>{data.name}</p>
                    </div>
                    <div>
                      <p className="text-green-400"> ( {data.comments_quantity} ) <span className="text-white">Comments</span> </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className=" lg:w-2/6">
<p className="text-white text-2xl text-center my-5 ">Recent Post</p>

<div data-aos="fade-up-left" className="flex">
<div data-aos="fade-right">
  <img className="w-96 h-28 " src={img1} alt="" />
</div>
<div className="text-white pl-2">
  <p className="font-bold flex items-center gap-3 pb-3"> <FaCalendarCheck></FaCalendarCheck> Oct 10 , 2023 </p>
<h1 className="font-mono"> Managing the Game: A Deep Dive into Sports Business and Leadership </h1>
</div>
</div>
<div data-aos="fade-up-left" className="flex mt-5">
<div>
  <img className="w-80" src={img3} alt="" />
</div>
<div className="text-white pl-2">
  <p className="font-bold flex items-center gap-3"> <FaCalendarCheck></FaCalendarCheck> Sep 28 , 2023 </p>
<h1 className="font-mono">Sports Management 101: Essential Skills and Best Practices </h1>
</div>
</div>
<div className="flex mt-5">
<div data-aos="fade-up-left">
  <img className="w-80" src={img2} alt="" />
</div>
<div className="text-white pl-2">
  <p className="font-bold flex items-center gap-3"> <FaCalendarCheck></FaCalendarCheck> Sep 09 , 2023 </p>
<h1 className="font-mono">Behind the Scenes: Inside the World of Sports Management </h1>
</div>
</div>


{/*  */}


<div>
  <p className="text-white text-2xl text-center my-10">TAGES</p>
  <div className="flex flex-wrap gap-5">
    <p className="text-green-400 border rounded-md p-2">Football</p>
    <p className="text-green-400 border rounded-md p-2">Tennies</p>
    <p className="text-green-400 border rounded-md p-2">Cycelling</p>
    <p className="text-green-400 border rounded-md p-2">Golf</p>
    <p className="text-green-400 border rounded-md p-2">Basketball</p>
    <p className="text-green-400 border rounded-md p-2">Horse Race</p>
  </div>
</div>


      </div>
    </div>
  );
};

export default Bloges;