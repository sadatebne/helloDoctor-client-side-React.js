import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import RegisterImg from '../../../../public/Login.json'
import useAuth from '../../../hooks/useAuth';




const Register = () => {

    const navigate = useNavigate();

    const [view, setView] = useState(false)
    //error state
    const [err, setErr] = useState('')

    const handleViewPass = () => {
        setView(!view)
    }

    //provider
    const { signUp, updateUserProfile } = useAuth()

    //react hook from
    const { register,reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
       // console.log(data)
        if (data.password == data.confirm) {
            signUp(data.email, data.password)
                .then(result => {
                    console.log(result.user)
                    updateUserProfile(data.name, data.photo)
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email, photo: data.photo }
                            fetch('http://localhost:3000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                        })

                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'SuccessFully Register',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                    reset()

                })
                .catch(error => {
                    setErr(error)
                })
            setErr('')
        } else {
            setErr('Password and Confirm-Password not same ')
        }
    };


    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-7 w-full md:w-1/2 mt-14">
                        <Lottie animationData={RegisterImg} ></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:mt-14">
                        <div className="card-body">
                            <h1 className='text-4xl text-center my-5 font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">User Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="name" name="name" className="input input-bordered input-info" />
                                    {errors.name?.type === 'required' && <p className="text-red-600 mt-2">User Name is required</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="email" name="email" className="input input-bordered input-info" required />

                                    {errors.email?.type === 'required' && <p className="text-red-600 mt-2">Email is required</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input {...register("password", { required: true, maxLength: 6, pattern: /^(?![A-Z])(?!.*[^\w\d_]).+$/ })} type={view ? "text" : "password"} placeholder="password" name="password" className="input input-bordered input-info" required />

                                    {errors.password?.type === 'required' && <p className="text-red-600 mt-2">Password is required</p>}

                                    {errors.password?.type === 'maxLength' && <p className="text-red-600 mt-2">Please Provide 6 digit password</p>}

                                    {errors.password?.type === 'pattern' && <p className="text-red-600 mt-2">Donot use uppercase and special character</p>}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Confirm Password</span>
                                    </label>
                                    <input {...register("confirm", { required: true })} type={view ? "text" : "password"} placeholder="password" name="confirm" className="input input-bordered input-info" required />

                                    <p className="text-red-600 mt-2">{err}</p>

                                </div>

                                <div className="form-control">
                                    <label className="flex flex-row-reverse justify-end cursor-pointer mt-4">
                                        <span className="label-text ms-5 font-bold">Show Password</span>
                                        <input onClick={handleViewPass} type="checkbox" className="checkbox checkbox-primary" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input {...register("photo", { required: true })} type="text" placeholder="photo URL" name="photo" className="input input-bordered input-info" />
                                    {errors.photo?.type === 'required' && <p className="text-red-600 mt-2">PhotoUrL is required</p>}
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </form>
                            <SocialLogin></SocialLogin>
                            <p>Already Have an account?<span className='text-[#FF3811]'><Link to='/login'> Sign In</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;