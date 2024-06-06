import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDesktopDownload } from "react-icons/go";

const headerMainContent = [
  {
    id: 0,
    contetnData: "Merge pdf",
  },
  {
    id: 2,
    contetnData: "Split pdf",
  },
  {
    id: 3,
    contetnData: "Compress image",
  },
  {
    id: 4,
    contetnData: " convert pdf",
  },
];

const Header = () => {
  return (
    <nav className=" fixed top-0 right-0 left-0 bottom-0 z-100 bg-white h-[4rem] shadow-lg  flex justify-between items-center px-4 ">
      {/* logo */}
      <div></div>

      {/* main content */}
      <div className=" flex space-x-6  h-full  justify-evenly items-center">
        {headerMainContent.map((data) => (
          <div key={data.id}>
            <p className=" uppercase">{data.contetnData}</p>
          </div>
        ))}
      </div>

      {/* right content */}
      <div className=" flex justify-center space-x-6 items-center  h-full  text-3xl ">
        <GoDesktopDownload  />
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Header;
