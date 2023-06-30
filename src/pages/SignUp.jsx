import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {createUsers, } from '../store/slices/userInfo.slice';

const SignUp = () => {

  const [userCreated, setUserCreated] = useState(false)

  const { register, handleSubmit,} = useForm()

  const dispatch = useDispatch()
  
  const submit = (dataForm) => {
    dispatch(createUsers(dataForm));
    setUserCreated(true)
     
  }

  if (userCreated) {
    return (
      <section className="bg-gray-100 grid place-content-center py-10 ssm:py-16 ">
        <div className="py-36">
          <section className="bg-white rounded-xl p-8 w-[280px] xs:w-[310px] ssm:w-[370px] md:w-[410px] text-center grid gap-4">
            <i className="bx bxs-user-check text-green-500/50 pl-10 text-center text-8xl md:text-9xl"></i>
            <h3 className="font-semibold text-2xl p-2 leading-9">
              User Created
            </h3>
            <p>
              Your account has been successfully created. Return to the login
              screen with the following link and enter
            </p>
            <Link className="text-blue-500" to="/login">
              Log in
            </Link>
          </section>
        </div>
      </section>
    );

  }



  return (
    <section className="bg-gray-100 grid place-content-center py-10 ssm:py-16 ">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white rounded-xl p-6 w-[280px] xs:w-[340px] ssm:w-[360px] md:w-[450px]  grid gap-6"
      >
        <h3 className="font-semibold text-2xl p-2 leading-9">Sign Up</h3>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="email">
            Email
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            required
            id="email"
            type="email"
            {...register("email")}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="firstName">
            First Name
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            required
            id="firstName"
            type="text"
            {...register("firstName")}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            required
            id="lastName"
            type="text"
            {...register("lastName")}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="password">
            Password
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            required
            id="password"
            type="password"
            {...register("password")}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="password">
            Phone (10 characters)
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            required
            id="phone"
            type="number"
            {...register("phone")}
          />
        </div>

        <button className="block w-full py-2 bg-red-500 text-white hover:bg-red-700 transition-colors">
          Sign Up
        </button>

        <span className="text-sm">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Log in
          </Link>
        </span>
      </form>
    </section>
  );
}

export default SignUp
