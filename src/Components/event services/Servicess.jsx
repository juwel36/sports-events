import { FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Servicess = ({ card }) => {
const navigate =useNavigate()


const handleshowdetails =(id)=>{
  navigate(`/seedetails/${id}`)

}



  return (
    <div>
      <h1 className="text-4xl  text-center mt-10 mb-2 font-mono  ">Event Services</h1>
      <p className="border-b-4 w-80 mx-auto border-red-500 mb-8"></p>
      <div className="grid grid-cols-3 gap-4">
        {card.map((data) => (
          <div key={data.id}>
            <div className="card card-compact  bg-base-100 shadow-xl"><figure><img className="h-56 w-96" src={data.image} alt="image" /></figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.shortDescription}</p>
                <p className='flex items-center text-base font-bold'> <FaDollarSign></FaDollarSign>{data.price}/<span className='text-xs font-normal pt-1'>Ticket</span> </p>
                <div className="mx-auto">
                  <button onClick={()=>handleshowdetails(data.id)} className="btn  bg-gray-700 text-white mt-4"> Show details </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicess;
