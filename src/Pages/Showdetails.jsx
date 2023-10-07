import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

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

const handlepay =()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Done',
    showConfirmButton: false,
    timer: 1500
  })
}

  return (
    <div>
       <div className="flex flex-col md:flex-col lg:flex-row lg:h-[78vh] gap-7 justify-center items-center mt-16">
      <div className=" lg:w-3/6  text-white">
<h1 className="text-4xl font-bold  mb-5" > {data.name} </h1>   
<p> {data.shortDescription} </p> 
<p> {data.detailedInformation} </p> 
<NavLink onClick={handlepay} className="mt-5 btn bg-green-400 border-none  px-6 "> {data.button
} </NavLink>    
      </div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="  lg:w-2/6 ">
<img className="w-96 h-96 rounded-lg" src={data.image} alt="" />
</div>

    </div>
    </div>
  );
};

export default Showdetails;