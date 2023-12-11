import React from "react";
import Image from "next/image";

import logo from "../logos/airbnb_logo.svg";
import logo_large from "../logos/airbnb_logo_large.svg";

interface LogoProps {
  size?: "small" | "large";
}

const Logo: React.FC<LogoProps> = ({ size = "small" }) => {
  const logoSrc = size === "large" ? logo_large : logo;

  return (
    <div className="flex items-center">
      <Image
        src={logoSrc}
        alt="Airbnb Logo"
        width={size === "large" ? 120 : 40}
        height={size === "large" ? 120 : 40}
      />
      {/* <span className="text-xl font-bold ml-2">Airbnb Clone</span> */}
    </div>
  );
};

export default Logo;
