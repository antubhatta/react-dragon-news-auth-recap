
import { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        // const email=e.target.email.value;
        // const password=e.target.password.value;
        // console.log(email,password)
     const form=new FormData(e.currentTarget)
     const name=form.get('name')
     const photoUrl=form.get('photo')
     const email=form.get('email')
     const password=form.get('password')
     console.log(name,photoUrl,email,password)
    //  create user
     createUser(email,password)
     .then((result)=>{
        console.log(result.user)
     })
     .catch((error)=>{
        console.log(error)
     })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
           <h3 className="text-3xl font-semibold text-center mt-10 space-y-8">Register your account</h3>

           <form onSubmit={handleRegister} className=" mx-auto  md:w-3/4 lg:w-1/2">

           <div className="form-control">
<label className="label">
<span className="label-text">Your Name</span>
</label>
<input type="text" name="name" required placeholder="Enter your name" className="input input-bordered"/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<input type="text" name="photo" required placeholder="Enter your Photo URL" className="input input-bordered"/>
</div>

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
<p className="text-[#706F6F]  mt-7 mb-20 text-center text-base font-semibold">Already Have An Account ? <Link className="text-red-600" to="/login">Login</Link></p>


           </div>
        </div>
    );
};

export default Register;