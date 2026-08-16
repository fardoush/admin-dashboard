import React from "react";

const Profile = () => {
  return (
    <div>
      <h2 className="mb-10">Profile</h2>
      <div className="max-w-2xl bg-surface border border-border rounded-lg py-6">
        <div className="flex items-center gap-5 px-6 ">
          <div className="w-26 h-26">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="top-0 w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl">JAHANARA</h4>
            <p className="text-text-secondary">jahanara@gmail.com</p>
            <span className="bg-primary/20 text-primary py-1 px-2 rounded uppercase text-xs tracking-widest">
              admin
            </span>
          </div>
        </div>
        <div className="border border-border my-6"></div>

        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <span className="text-text-secondary uppercase text-xs tracking-widest">
                Full name
              </span>
              <p className="capitalize">Marcus Thorne</p>
            </div>
            <div className="">
              <span className="text-text-secondary uppercase text-xs tracking-widest">
                email
              </span>
              <p className="capitalize">marcus@veridian.co</p>
            </div>
            <div className="">
              <span className="text-text-secondary uppercase text-xs tracking-widest">
                role
              </span>
              <p className="capitalize">Admin</p>
            </div>
            <div className="">
              <span className="text-text-secondary uppercase text-xs tracking-widest">
                Location
              </span>
              <p className="capitalize">Berlin, DE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
