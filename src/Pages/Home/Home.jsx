import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";

import Servicess from "../../Components/event services/Servicess";
import Footer from "../../Components/Footer";

import CountSection from "../../Components/CountSection";
import Succesfullevents from "../../Components/Succesfullevents";


const Home = () => {
const alldata=useLoaderData()

  return (
    <div>
      
<Banner></Banner>
<Servicess card={alldata}></Servicess>
<CountSection></CountSection>
<Succesfullevents></Succesfullevents>
<Footer></Footer>
    </div>
  );
};

export default Home;