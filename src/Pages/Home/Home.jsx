import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Servicess from "../../Components/event services/Servicess";


const Home = () => {
const alldata=useLoaderData()

  return (
    <div>
      
<Banner></Banner>
<Servicess card={alldata}></Servicess>
<Footer></Footer>
    </div>
  );
};

export default Home;