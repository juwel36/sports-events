import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const Showdetails = () => {
  const [data,setdata]=useState({})
  const {id}=useParams()
  const card= useLoaderData()
console.log(id,card);


useEffect(() => {
 
  const details = card.find(carditem => carditem.id === id);
  console.log(details);
 setdata(details)
}, [card, id]);

  return (
    <div>
       <div className="flex  justify-center items-center mt-16">
      <div className=" w-3/6">
<h1 className="text-2xl font-bold  mb-5" > {data.name} </h1>   
<p> {data.shortDescription} </p> 
<p> {data.detailedInformation} </p> 
<NavLink className="mt-5 btn bg-[#F9A51A] border-none  px-6 "> {data.button
} </NavLink>    
      </div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-2/6 ">
<img className="w-96 h-96 rounded-lg" src={data.image} alt="" />
</div>

    </div>
    </div>
  );
};

export default Showdetails;