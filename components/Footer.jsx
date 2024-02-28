import Image from "next/image";
import React from "react";
import logo from "/public/images/logo_full_gray.svg";
import { SparklesPreview } from "./SparklesPreview";

const Footer = () => {
  return (
    <footer className="bg-[#000] relative pt-32">
      <div className="absolute bottom-0 translate-x-2/4 right-[50%]">
        <SparklesPreview />
      </div>
      <div className="max-w-screen-xl mx-auto px-12 py-12 pb-96">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 items-center">
          <div className="flex flex-col gap-5">
            <div className="w-[100px]">
              <Image
                className="w-[100%] h-[100%] object-cover object-center"
                src={logo}
              ></Image>
            </div>
            <div>
              <p className="text-white">GET IN TOUCH</p>
              <p className="text-gray-400">youremail@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white">LOCATION</p>
            <p className="text-gray-400">
              Near Ajman Private School Ajman - United Arab
            </p>
            <p className="text-gray-400">Emirates</p>
          </div>
          <div className="text-gray-400">
            <p className="text-white">FOLLOW</p>
            <p>LINKEDIN</p>
            <p>INSTAGRAM</p>
            <p>MEDIUM</p>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <button class="button-57 bg-[#5a767d] transition duration-300 hover:bg- p-3 w-max rounded-full text-xs px-4 m-auto sm:m-0">
                <span class="text-btn">SEND MAIL</span>
                <span>SEND MAIL</span>
              </button>
              <button class="button-57" role="button"></button>
            </div>
            <div className="text-gray-400">
              <p>TERMS & CONDITIONS</p>
              <p>PRIVACY POLICY</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
