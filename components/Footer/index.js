import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-col w-full bg-white-blue px-4 md:px-16 lg:px-32 xl:px-40 2xl:px-72 pt-7 pb-1">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* <h4 className="text-3xl font-black text-blue-700 uppercase text-center md:text-left">
          Insan <span>Mandiri</span>
        </h4> */}
        <div className="">
          <Image
            src="/FOOTER.png"
            alt="logo"
            layout="fixed"
            height={80}
            width={300}
          />
        </div>
        <div className="flex justify-center  flex-col sm:flex-row">
          <div className="px-7 w-full">
            <h4 className="text-3xl">Company</h4>
            <ul className="">
              <li className="py-1">Home</li>
              <li className="py-1">About Us</li>
              <li className="py-1">Faq</li>
            </ul>
          </div>
          <div className="px-7 w-full">
            <h4 className="text-3xl ">Product</h4>
            <ul className="">
              <li className="py-1">Canon</li>
              <li className="py-1">Minolta</li>
              <li className="py-1">Xerox</li>
            </ul>
          </div>
          <div className="pl-7 w-full pr-7 md:pr-0">
            <h4 className="text-3xl">Services</h4>
            <ul className="">
              <li className="py-1">Rent</li>
              <li className="py-1">Spare Parts</li>
              <li className="py-1">service warranty</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center align-middle font-bold">
        Copyright @INSAN MANDIRI 2021
      </div>
    </div>
  );
};

export default Index;
