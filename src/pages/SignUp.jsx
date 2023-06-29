import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className="bg-gray-100 grid place-content-center py-10 ssm:py-16 ">
      <form className="bg-white rounded-xl p-6 w-[280px] xs:w-[340px] ssm:w-[360px] md:w-[450px]  grid gap-6">
        <h3 className="font-semibold text-2xl p-2 leading-9">Sign Up</h3>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="email">
            Email
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="email"
            type="email"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="password">
            First Name
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="password"
            type="text"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="password">
            Last Name
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="password"
            type="password"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="password">
            Password
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="password"
            type="password"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-base" htmlFor="password">
            Phone (10 characters)
          </label>
          <input
            className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
            id="password"
            type="password"
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
