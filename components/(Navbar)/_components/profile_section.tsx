import { Button } from "@/components/ui/button";
import { ImageIcon, Menu } from "lucide-react";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="flex gap-3 place-items-center">
      {/* Airbnb you home */}
      <Button variant={"ghost"} className="rounded-full">
        Airbnb you home
      </Button>
      {/* Profile Menu */}
      <div className="flex gap-3 px-4 py-3 hover:shadow-md transition-all duration-500 ease-in-out border border-gray-300 rounded-full cursor-pointer">
        {/* Menu Icon */}
        <Menu />

        {/* AccountIcont */}
        <ImageIcon />
      </div>
    </div>
  );
};

export default ProfileSection;
