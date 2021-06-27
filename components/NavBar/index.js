import React, { useState } from "react";
import { routes } from "../../utils/route";
import Image from "next/image";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full px-4 md:px-16 lg:px-32 xl:px-40 2xl:px-72 py-7 bg-white-blue bg-opacity-90 flex justify-between items-center z-10">
      <div className="">
        <h1 className="text-4xl font-black text-blue-700 uppercase">
          Insan <span>Mandiri</span>
        </h1>
        {/* <Image
          src="/FOOTER.png"
          alt="logo"
          layout="fixed"
          height={40}
          width={150}
        /> */}
      </div>

      <ul
        className={
          isMenuOpen
            ? `flex flex-col fixed md:static w-full md:w-auto h-screen md:h-auto inset-0 md:inset-auto items-center justify-center md:justify-start bg-white-blue md:bg-transparent md:flex-row z-10`
            : `hidden md:flex items-center`
        }
      >
        {routes.map((menu, index) => (
          <li
            className="first:mr-0 first:mt-0 first:md:mr-4 mt-6 mr-0 md:mr-4 md:mt-0 "
            key={index}
          >
            <a
              href={menu.path}
              className="text-2xl hover:text-blue-700 cursor-pointer"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
