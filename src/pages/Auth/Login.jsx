import React from "react";
import { AiOutlineSlack } from "react-icons/ai";
import { Link } from "react-router";
import Divider from "../../components/ui/Divider";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-57px)] flex justify-between items-center">
      <div className=" max-w-md bg-surface p-8 mx-auto space-y-4 rounded-lg">
        {/* logo  */}
        <Link to="/" className="flex gap-2 items-center ">
          <AiOutlineSlack className="text-primary" size={24} />
          <span className=" font-bold tracking-wide text-2xl">AiSlack</span>
        </Link>

        <div className="">
          <h3 className="text-2xl font-semibold mb-1">Welcome back</h3>
          <span className="text-sm text-text-secondary">
            Sign in to continue to your dashboard.
          </span>
        </div>

        <form action="">
          <div className="space-y-3">
            <div className="">
              <label
                htmlFor=""
                className="text-xs text-text-secondary uppercase tracking-widest"
              >
                email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-card py-2 px-3 rounded-lg focus:outline-none focus:border focus:border-primary/60"
              />
            </div>
            <div className="">
              <label
                htmlFor=""
                className="text-xs text-text-secondary uppercase tracking-widest"
              >
                password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-card py-2 px-3 rounded-lg focus:outline-none focus:border focus:border-primary/60"
              />
            </div>
            <button className="mt-2 w-full bg-card border border-border py-2.5 px-4 rounded-lg font-semibold hover:bg-primary hover:text-surface hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Sign In
            </button>
            <Divider />
            <button className="mt-2 w-full bg-card border border-border py-2.5 px-4 rounded-lg font-semibold hover:bg-primary hover:text-surface hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Continue with Google
            </button>
            <span className="text-xs text-text-secondary text-center">
              Don't have an account?
              <Link
                to="/register"
                className="pl-1 text-primary font-bold capitalize"
              >
                Create account
              </Link>
              .
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
