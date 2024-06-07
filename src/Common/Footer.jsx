import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const footerData = [

  {
    id: 0,
    footerData: `ILOVEPDF`,
    subFooter: [
      {
        id: 0,
        name: `Home`,
      },
      {
        id: 2,
        name: `Feature`,
      },
      {
        id: 3,
        name: `Pricing`,
      },
      {
        id: 4,
        name: `Tools`,
      },
    ],
  },
  {
    id: 0,
    footerData: `ILOVEPDF`,
    subFooter: [
      {
        id: 0,
        name: `Home`,
      },
      {
        id: 2,
        name: `Feature`,
      },
      {
        id: 3,
        name: `Pricing`,
      },
      {
        id: 4,
        name: `Tools`,
      },
    ],
  },
  {
    id: 0,
    footerData: `ILOVEPDF`,
    subFooter: [
      {
        id: 0,
        name: `Home`,
      },
      {
        id: 2,
        name: `Feature`,
      },
      {
        id: 3,
        name: `Pricing`,
      },
      {
        id: 4,
        name: `Tools`,
      },
    ],
  },
  {
    id: 0,
    footerData: `ILOVEPDF`,
    subFooter: [
      {
        id: 0,
        name: `Home`,
      },
      {
        id: 2,
        name: `Feature`,
      },
      {
        id: 3,
        name: `Pricing`,
      },
      {
        id: 4,
        name: `Tools`,
      },
    ],
  },
  
];
const Footer = () => {
  return (
    <footer className=" w-full min-h-[20rem]  flex flex-wrap justify-evenly gap-3 items-center shadow-slate-500 shadow-2xl mt-10 relative bottom-0  ">
      {/*  */}
      {footerData?.map((data) => (
        <div 
        key={data.id}
        className=" flex flex-col justify-center items-center w-[10rem] h-[20rem] ">
          <p className=" py-3 cursor-pointer font-bold text-xl text-blue-500/60 ">{data.footerData}</p>
          {data.subFooter.map((data) => (
            <p className=" cursor-pointer hover:text-blue-500/60 duration-500 hover:scale-110  pb-1  ">{data.name}</p>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
