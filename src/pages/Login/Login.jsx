
import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {logInUser}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        // const email=e.target.email.value;
        // const password=e.target.password.value;
        // console.log(email,password)
        
        const form= new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
       console.log(email,password)

    //    loginUser
    logInUser(email,password)
    .then((result)=>{
        console.log(result.user)
    })
    .catch((error)=>{
        console.log(error)
    })
    }
    return (
        <div className="">
            <Navbar></Navbar>
           <div>
           <h3 className="text-3xl font-semibold text-center mt-10 space-y-8">Please Login</h3>

           <form onSubmit={handleLogin} className=" mx-auto  md:w-3/4 lg:w-1/2">
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" name="email" required placeholder="Enter your email address" className="input input-bordered"/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" required name="password" placeholder="Enter your password" className="input input-bordered"  />
<label className="label">
<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Login</button>
</div>
</form>
<p className="text-[#706F6F]  mt-7 mb-20 text-center text-base font-semibold">Dont’t Have An Account ? <Link className="text-red-600" to="/register">Register</Link></p>


           </div>
        </div>
    );
};

export default Login;