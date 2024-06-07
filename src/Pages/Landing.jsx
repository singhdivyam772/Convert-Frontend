import React from "react";
import HeaderAdjustment from "../Common/HeaderAdjustment";
import AllFeatureComponents from "../Components/AllFeatureComponents";
import { Col, Divider, Row } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import { useNavigate } from "react-router-dom";
const featureData = [
 
  {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  },  {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ip elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  }, {
    id: 1,
    featureName: "merge pdf",
    aboutFeature: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id. lorem Combine PDFs in the order you want with the easiest PDF merger available.`,
    icon: `https://res.cloudinary.com/drj0uehgx/image/upload/v1717692891/Pdf-Project/file_sezjok.png`,
  },
];
const Landing = () => {

  const navigate = useNavigate();


  const navigateToDonload = () => {
    navigate('/download-page')

  }
  return (
    <main className="flex flex-col justify-center items-center">
      <HeaderAdjustment />
      <section className="w-[80vw] min-h-screen flex flex-col justify-start items-center  ">
        <h1 className="py-4  mx-auto text-2xl lg:text-3xl xl:text-4xl leading-10 font-bold  text-center">
          Every tool you need to work with PDFs in one place
        </h1>
        <h3 className="xl:px-[12rem] lg:px-[5rem] md:px-[2rem] py-4  mx-auto lg:text-xl text-base  lg:leading-8  font-normal  text-center">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </h3>

        {/* featrue card */}
        <div className=" flex flex-wrap w-[90vw] justify-center gap-4 items-start">
          {featureData?.map((data ) => (
            <div
              className=" flex flex-col justify-center items-start py-6  px-1 cursor-pointer duration-500 hover:scale-105 overflow-hidden w-[260px] h-[15rem] shadow-xl "
              key={data.id}
              onClick={navigateToDonload}
            >
              <img 
              src={data.icon} 
              alt="" 
              className=" object-cover md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"
              />
              <p className=" text-xl font-medium  uppercase md:leading-9">{data.featureName}</p>
              <p className=" text-sm font-normal   md:leading-6">{data.aboutFeature}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Landing;
