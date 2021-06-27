import React from "react";
import Container from "../Container";
import Image from "next/image";

const Index = () => {
  return (
    <Container>
      <section className="pt-5 container mx-auto flex justify-between lg:flex-row flex-col">
        <div
          className="flex justify-between flex-col lg:w-2/4 w-full md:mt-10 "
          style={{ height: 550 }}
        >
          <div>
            <h1 className="text-5xl text-blue-700 font-extrabold">
              Mesin Fotocopy Impor <br /> Murah dan Bergaransi
            </h1>
            <p className=" sm:w-2/4 w-full pt-4 text-gray-light ">
              Kami menyediakan mesin fotocopy murah dan berkualitas, di impor
              langsung dari luar negri (china, singapore, USA, malaysia) dan
              sudah di siapkan oleh teknisi terbaik kami untuk dipakai oleh anda
            </p>
            <button className="bg-blue-700 py-3 px-10 font-semibold text-white rounded-lg shadow-lg mt-10 hover:bg-blue-dark ">
              Show Me Now
            </button>
          </div>
        </div>
        <div className="flex justify-center " style={{ height: 550 }}>
          <Image
            src="/fotocopy.jpg"
            alt="fotocopy"
            layout="fixed"
            height={500}
            width={600}
          />
        </div>
      </section>
    </Container>
  );
};

export default Index;
