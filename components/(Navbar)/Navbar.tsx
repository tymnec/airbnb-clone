import React from "react";
import NavbarLogoSection from "./_components/logo_section";
import ProfileSection from "./_components/profile_section";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 mx-12 place-items-center">
      {/* Logo Section */}
      <div>
        <NavbarLogoSection />
      </div>

      {/* Main Search Section */}
      <div className="px-4 py-3 flex bg-slate-200 shadow-sm rounded-full">
        {" "}
        Main Search Section
      </div>

      {/* Profile Section */}
      <div>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Navbar;
