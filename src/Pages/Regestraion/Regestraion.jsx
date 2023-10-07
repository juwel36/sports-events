import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const Regestraion = () => {
  const {createuser} =useContext(AuthContext)
  const [showerror,setshowerror]=useState(null)
  const navigate=useNavigate()

const handleregestraion = e =>{
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
console.log(email,password);

setshowerror('')
if (password.length < 6) {
  return setshowerror("Your password must be at least 6 characters long!");
}

if (!/[A-Z]/.test(password)) {
  return setshowerror("Your password must contain at least one capital letter!");
}

if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
  return setshowerror("Your password must contain at least one special character!");
}





createuser(email,password)
.then(res=> {
  console.log(res.user);
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: ' Successfully Regestered',
  showConfirmButton: false,
  timer: 1500
})
navigate('/')
})
.catch(error=>{
  console.log(error);
  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'you already Regestered !!!!!!',
    showConfirmButton: false,
    timer: 1500
  })
})

}

  return (
    <div>
       <div className="hero h-[89vh] ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-white font-bold">Regestraion now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregestraion} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          <p href="#" className="label-text-alt  ">Already Have an account ?<span className='text-emerald-800'> <Link to='/login'>Log In</Link></span> </p>
          </label>
          <p> {showerror} </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gray-700 text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Regestraion;