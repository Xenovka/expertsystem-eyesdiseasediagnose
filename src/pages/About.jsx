import React from "react";
import img from "../assets/eyeball.webp";

const About = () => {
  return (
    <div className="text-white mt-12">
      <div className="flex place-content-center mx-12 bg-gradient-to-r from-cyan-700 to-blue-900 rounded-[15px] p-12">
        <div className="my-auto">
          <p className="mb-4 text-4xl font-semibold">Sistem Diagnosis Penyakit Mata</p>
          <p className="text-xl">
            Sistem pakar ini dibangun untuk membantu orang-orang dalam memelihara
            kesehatan matanya. Dengan sistem ini, pengguna tidak hanya dapat mengetahui
            penyakit yang dialaminya, tetapi juga solusi untuk mengatasi penyakit tersebut. 
            Seluruh data yang digunakan dalam pembangunan sistem berasal dari sumber-sumber
            tertulis yang terpercaya dan sudah diuji kebenarannya.
          </p>
        </div>
        <img src={img} className="w-96 my-auto" alt="" />
      </div>
    </div>
  );
};

export default About;
