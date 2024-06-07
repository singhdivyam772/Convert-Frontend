import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { CaretDownOutlined } from "react-icons/ai";
import { GoDesktopDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import { AiOutlineCaretDown } from "react-icons/ai";

const headerMainContent = [
  {
    id: 0,
    contentData: "Merge PDF",
  },
  {
    id: 2,
    contentData: "Split PDF",
  },
  {
    id: 3,
    contentData: "Compress Image",
  },
  {
    id: 4,
    contentData: "Convert PDF",
  },
];

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white h-16 shadow-lg flex justify-between items-center px-4">
      {/* Logo */}
      <Link to="/">
        <p className="text-2xl uppercase text-blue-400 font-bold">PDFStore</p>
      </Link>

      {/* Main content */}
      <div className="flex space-x-6 h-full justify-evenly items-center">
        {headerMainContent.map((data) => (
          <div key={data.id}>
            <Popover content={content} title="Title">
              <p className="uppercase cursor-pointer flex items-center justify-center gap-1">
                {data.contentData}
                <AiOutlineCaretDown />

              </p>
            </Popover>
          </div>
        ))}
      </div>

      {/* Right content */}
      <div className="flex justify-center space-x-6 items-center h-full text-3xl">
        <GoDesktopDownload />
        <Popover content={content} title="Title" trigger="click">
          <GiHamburgerMenu className="cursor-pointer" />
        </Popover>
      </div>
    </nav>
  );
};

export default Header;
