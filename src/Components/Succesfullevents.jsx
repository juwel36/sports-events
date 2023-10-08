import png1 from "../assets/1591661944-javelin-1591661944.jpg"
import png2 from "../assets/185619.webp"
import png3 from "../assets/20230826_215038-356x364.jpg"
import png4 from "../assets/2RCAFDVPZHQCAQTJWDDRMJKYP4.jpg"
import png5 from "../assets/30221-boxing.webp"
import png6 from "../assets/Mondial_Ping_-_Men's_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg"
import png7 from "../assets/USMC_Marathon.jpg"
import Marquee from "react-fast-marquee";


const Succesfullevents = () => {
  return (
    <div className="text-white mb-28">
      
<p className="text-4xl text-center pb-10 font-mono">Previous Succesfull Events</p>
<p className="border-b-4 w-96 mx-auto border-red-500 mb-8"></p>
  <div className="font-mono  ">
  <Marquee>
      <div  className="relative mr-16 h-80" >
        <img src={png1} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white">Javelin throw</div>
      </div>

      <div  className="relative mr-16 h-80" >
        <img src={png2} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white">Pole vault</div>
      </div>

      <div  className="relative mr-16 h-80" >
        <img src={png3} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white">200-meter Run</div>
      </div>

      <div  className="relative mr-16 h-80" >
        <img src={png4} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white">Rugby union Cup</div>
      </div>

      <div  className="relative mr-16 h-80" >
        <img src={png5} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white">
Boxing Events</div>
      </div>

      <div  className="relative mr-16 h-80" >
        <img src={png6} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white">Table tennis</div>
      </div>

      <div  className="relative mr-16 h-80" >
        <img src={png7} alt="" className="w-52 rounded-lg h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white"> Marathon 2022 </div>
      </div>




</Marquee>


  </div>

    </div>
  );
};

export default Succesfullevents;