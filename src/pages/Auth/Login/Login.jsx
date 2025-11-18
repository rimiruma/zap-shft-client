import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { signInUser } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    // console.log('in the login page', location);
    

    const handleLogin = (data) => {
        console.log('form data', data);

        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state || "/")
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
            <div className="max-w-5xl w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden">

                {/* RIGHT SIDE FORM */}
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-base mb-6 opacity-70">
                        Please login to continue to your dashboard.
                    </p>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <fieldset className="fieldset space-y-4">

                            {/* EMAIL FIELD */}
                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="input input-bordered w-full"
                                    placeholder="email"
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Email is required.</p>
                                )}
                            </div>

                            {/* PASSWORD FIELD */}
                            <div>
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                    })}
                                    className="input input-bordered w-full"
                                    placeholder="Password"
                                />

                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required.</p>
                                )}

                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-700">
                                        Password must be at least 8 characters long.
                                    </p>
                                )}
                            </div>

                            {/* FORGOT PASSWORD */}
                            <div className="text-right">
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button className="btn bg-primary w-full mt-4">Login</button>
                        </fieldset>
                        <p className='text-center'>New To Zap Shift? <Link state={location.state} className='text-blue-600 hover:text-red-700 underline' to='/register'>Register</Link>
                        </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
