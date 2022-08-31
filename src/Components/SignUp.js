import React, { useState } from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
// import facebok from '../images/icons/facebook.png';
import github from "../images/icons/github.svg";
import google from "../images/icons/google.png";


const SignUp = () => {
  
  const [passwordError, setPasswordError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
  //   useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  if (user || googleUser || githubUser) {
    console.log(user);
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError("Password Didn't matched");
      return;
    }
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div className="bg-white py-8">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse  shadow-2xl  py-0 px-0 w-3/6 bg-gradient-to-r from-primary to-secondary justify-between">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-primary to-secondary  ">
            <div class="card-body ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text text-white">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("name")}
                  />
                </div>
                <div class="form-control mx-auto">
                  <label class="label">
                    <p class="label-text text-white">
                      Email <span className="text-red-600">*</span>
                    </p>
                  </label>
                  <input
                    type="email"
                    placeholder="Email here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is reqiured",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control mx-auto">
                  <label class="label">
                    <p class="label-text text-white">
                      Password <span className="text-red-600">*</span>
                    </p>
                  </label>
                  <input
                    type="password"
                    placeholder="password here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is reqiured",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be more than 6 charecters",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control mx-auto">
                  <label class="label">
                    <p class="label-text text-white">
                      Confirm password <span className="text-red-600">*</span>
                    </p>
                  </label>
                  <input
                    type="password"
                    placeholder="Re-type password "
                    class="input input-bordered w-full max-w-xs"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Password is reqiured",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be more than 6 charecters",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {passwordError ? (
                      <span class="label-text-alt text-red-500">
                        {passwordError}
                      </span>
                    ) : (
                      <span class="label-text-alt text-red-500"></span>
                    )}
                  </label>
                </div>

                {
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn  rounded-lg 
                  border-secondary hover:bg-base-100 hover:border-secondary hover:border-4 hover:text-primary bg-secondary text-white mt-5  "
                  />
                }
              </form>
            </div>
          </div>
          <div class=" lg:text-left pl-11  ">
            <div>
              <h1 class="  text-3xl font-bold  mb-5 text-white ">
                Social log in
              </h1>
              <div className="flex  mt-4 ">
                <button onClick={() => signInWithGoogle()}>
                  <img className="w-11 h-11 mr-4" src={google} alt="" />
                </button>
                <button onClick={() => signInWithGithub()}>
                  <img className="w-11 h-11 mr-4" src={github} alt="" />
                </button>
              </div>
              <p className="text-center text-white  font-light my-3 ">
                Already Have account?
                <Link to="/login" className="text-white font-bold ">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;