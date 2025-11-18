import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (data) => {
        console.log("after register", data.photo[0]);
        const profileImg = data.photo[0]
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                
                // store the image and get the photo url
                const formData = new FormData();
                formData.append('image', profileImg);
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
                axios.post(image_API_URL, formData)
                .then(res => {
                    console.log('after image upload', res.data.data.url);
                    // update user profile
                    const userProfile = {
                        displayName : data.name,
                        photoURL : res.data.data.url
                    }
                    updateUserProfile(userProfile)
                    .then(() => {
                        console.log('user profile update done');
                        navigate(location?.state || '/')
                        
                    })
                    .catch(error => console.log(error)
                    )
                    
                })

            })
            .catch(error => {
                console.log(error);

            })
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

                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <fieldset className="fieldset space-y-4">
                            {/* Name filed */}
                            <div>
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="input input-bordered w-full"
                                    placeholder="Your Name"
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Name is required.</p>
                                )}
                            </div>

                            {/* EMAIL FIELD */}
                            <div>
                                <label className="label">Photo</label>
                                <input
                                    type="file"
                                    {...register("photo", { required: true })}
                                    className="file-input"
                                    placeholder="Your photo"
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Name is required.</p>
                                )}
                            </div>
                            {/* email filed */}
                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="input input-bordered w-full"
                                    placeholder="Email"
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
                                        pattern:
                                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",.<>/?`~|\\]).{8,}$/
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

                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-700">
                                        Password must contain at least one uppercase letter, one lowercase
                                        letter, one number, and one special character.
                                    </p>
                                )}
                            </div>

                            {/* FORGOT PASSWORD */}
                            <div className="text-right">
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button className="btn btn-neutral w-full mt-4">Register</button>
                        </fieldset>
                        <p className='text-center'>Already have an account?<Link state={location.state} className='text-blue-600 hover:text-red-700 underline' to='/Login'>Login</Link>
                        </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
