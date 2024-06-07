import React from "react";
import HeaderAdjustment from "../Common/HeaderAdjustment";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Download = () => {

    const navigate = useNavigate();

    const navigateToRTD = () =>{
        navigate('/ready-todownload-path')
    }
  return (
    <div className=" w-full min-h-[70vh]  flex flex-col justify-start items-center ">
      <HeaderAdjustment />
      <h1 className=" xl:text-4xl lg:text-3xl text-2xl  font-bold py-8 ">
        Split PDF file
      </h1>
      <p className=" text-2xl md:w-9/12 pb-5 text-center md:px-2 px-5  ">
        Separate one page or a whole set for easy conversion into independent
        PDF files.
      </p>

      <Button
      onClick={navigateToRTD}
      className=" bg-blue-400 w-[21rem] h-[5rem] rounded-xl  text-2xl font-semibold px-4 py-2 md:mb-1 mb-16 capitalize">
        Select pdf file
      </Button>
    </div>
  );
};

export default Download;
