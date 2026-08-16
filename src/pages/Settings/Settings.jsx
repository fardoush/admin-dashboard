import React from "react";

const Settings = () => {
  return (
    <div>
      <h2 className="">Settings</h2>
      <div className=" max-w-2xl space-y-4">
        {/* appearance  */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="">Appearance</h3>
          <p className="text-xs text-text-secondary mb-4">
            Choose light or dark mode.
          </p>
          <div className="flex justify-between items-center gap-2">
            <span className="">Dark mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />

              <div className="w-12 h-6 bg-gray-600 rounded-full peer-checked:bg-primary transition-colors"></div>
              <div className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>
        </div>
        {/* Notification  */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="">Notifications</h3>
          <p className="text-xs text-text-secondary mb-4">
            Manage how you receive alerts.
          </p>
          <div className="space-y-1">
            <label className="flex items-center justify-between cursor-pointer">
              <span>Email updates</span>
              <input
                type="checkbox"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span>New hire alerts</span>
              <input
                type="checkbox"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span>Weekly summary</span>
              <input
                type="checkbox"
                className="w-4 h-4 accent-primary cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* security  */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="">Security</h3>
          <p className="text-xs text-text-secondary mb-4">
            Password and access.
          </p>

          <span className="text-sm text-primary ">Change Password</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
