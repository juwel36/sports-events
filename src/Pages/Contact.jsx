
import { FaPhone,FaSearchLocation } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Footer from '../Components/Footer';
import Swal from 'sweetalert2';


const Contact = () => {

const handlesendmassege =()=>{
  Swal.fire('Send your message Succesfully')
}

  return (
    <div>
      <div className="flex flex-col lg:flex-row my-10 gap-6 ">
<div className="  bg-green-400 lg:w-3/6 p-10">
<p className="text-4xl pb-5"> Get in Contact with Our Team</p>
<p>Welcome to our Sports Management website! We're thrilled to connect with you and assist with any inquiries or concerns you may have. Our team is dedicated to providing you with top-notch sports management services, and we value your feedback and questions. Please feel free to get in touch with us using the following contact information:</p>
<div>
  {/*  */}
<div className='flex  items-center gap-2 mt-5'>
<p className='bg-emerald-500 p-7 rounded-sm text-2xl'> <FaSearchLocation></FaSearchLocation> </p>
<div>
  <p className='text-xl font-bold font-mono'>Address</p>
  <p>14 Amborkana , Sylhet , Bangladesh </p>
</div>
</div>
  {/*  */}
<div className='flex  items-center gap-2 mt-5'>
<p className='bg-emerald-500  p-7 rounded-sm text-2xl'> <FaPhone></FaPhone> </p>
<div>
  <p className='text-xl font-bold font-mono'>Phone</p>
  <p>+ 1 (123) 456-7890 <br />
  + 555 456-7890 </p>
</div>
</div>
  {/*  */}
<div className='flex  items-center gap-2 mt-5'>
<p className='bg-emerald-500  p-7 rounded-sm text-2xl'> <AiOutlineMail></AiOutlineMail> </p>
<div>
  <p className='text-xl font-bold font-mono'>Email</p>
  <p> AGJevent.gmail.com <br />
  support@eventmanagment.com </p>
</div>
</div>



</div>
</div>

<div className='lg:w-3/6'>
<p className='text-white text-3xl text-center'>Have Questions? Contact Us</p>
  <p className='text-white text-sm pt-6'> We appreciate your interest in our Sports Management services and are here to provide you with answers, support, and assistance. Whether you have inquiries about our services, need help with a particular aspect of sports management, or simply want to connect with our team, you've come to the right place.</p>
<div>
<div className='flex  gap-5 mt-8'>
  <input className='bg-gray-800 p-2 w-64 text-white'  type="text" placeholder='Your Name' />
  <input className='bg-gray-800 p-2 w-64  text-white' type="text" placeholder='Your Email' />
</div>
<div className='flex gap-5 mt-5'>
  <input className='bg-gray-800 p-2 w-64  text-white' type="text" placeholder='Your Number' />
  <input className='bg-gray-800 p-2 w-64  text-white' type="text" placeholder='Country' />
</div>
<div className='mt-8'>
  <textarea className='bg-gray-800 w-full p-2 text-white h-36 ' name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
  <button onClick={handlesendmassege} className='btn mt-3 bg-green-400 border-none w-full'> Send Message </button>
</div>


</div>

</div>


      </div >
<Footer></Footer>

    </div>
  );
};

export default Contact;