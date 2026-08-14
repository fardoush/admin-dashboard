import React from "react";

const AddEmployee = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">Add employee</h2>
      <form action="">
      <div className="bg-surface rounded-xl p-8 max-w-2xl border border-border space-y-4">
        
          <div className="">
            <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2"
            >
              Full name
            </label>
            <input
              type="text"
              name="fullname"
              className="w-full bg-card focus:outline-none focus:border focus:border-primary py-2 px-4 rounded-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-card focus:outline-none focus:border focus:border-primary py-2 px-4 rounded-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2"
            >
              Role
            </label>
            <input
              type="text"
              name="role"
              className="w-full bg-card focus:outline-none focus:border focus:border-primary py-2 px-4 rounded-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
                <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2">
              Department
            </label>

            <select name="" id="" value="Engineering" className="p-2 w-full bg-card focus:outline-none focus:border focus:border-primary rounded-sm text-white" >
                <option value="Design">Design</option>
                <option value="Product">Product</option>
            </select>
            </div>
            <div className="">
                <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2">
              status
            </label>

            <select name="" id="" value="Engineering" className="p-2  w-full bg-card focus:outline-none focus:border focus:border-primary rounded-sm text-white" >
                <option value="Design">Active</option>
                <option value="Product">On leave</option>
                <option value="Product">Remote</option>
            </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
                <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2">
              Salary (USD)
            </label>

            <input
              type="number"
              name="salary"
              className="w-full bg-card focus:outline-none focus:border focus:border-primary py-2 px-4 rounded-sm"
            />
            </div>
            <div className="">
                <label
              htmlFor=""
              className="text-xs uppercase tracking-widest text-text-secondary py-2">
              Joined date
            </label>
<input
              type="date"
              name="date"
              className="w-full bg-card focus:outline-none focus:border focus:border-primary py-2 px-4 rounded-sm"
            />
          
            </div>
          </div>
          <div className="flex gap-3 mt-8">  
            <button className="bg-primary py-2 px-4 rounded text-surface">Create Employee</button>
            <button className="bg-card py-2 px-4 rounded ">Cancel</button>
          </div>
        
      </div>
      </form>
    </div>
  );
};

export default AddEmployee;
