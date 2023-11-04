import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    // Main div Hero section
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/398762754_24938150459105497_8202158954643896908_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6HPXUyXj6K2PlJ3vqZqLK3y9y5Is0mIHfL3LkizSYgXoHWaREEtH-GMAYhGt_-97xHCrF3XR7E0hV0F1E8WGF&_nc_ohc=PrLJT_9MTzcAX9rRAuB&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfAwkYpd3m_ZKbiHZ8v0Qb0fgXZ71f-Fj2UghgHtunzWLQ&oe=654C1338"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Vincent Cumayas
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Future Software Engineer at work",
                1000,
                "Goal Oriented",
                1000,
                "Thriving to learn",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
