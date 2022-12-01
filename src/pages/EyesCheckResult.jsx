import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import penyakit from "./../data/penyakit";

const EyesCheckResult = () => {
  const [result, setResult] = useState({});
  const { state: selectedSymptom } = useLocation();
  console.log(selectedSymptom);

  useEffect(() => {
    console.log(result);
    penyakit.forEach((p) =>
      p.gejala.every((g) => selectedSymptom.includes(g)) && p.gejala.length === selectedSymptom.length
        ? setResult(p)
        : null
    );
  }, [result, selectedSymptom]);

  return (
    <div>
      <h1 className="text-tertiary text-4xl text-center font-extrabold mb-8">HASIL DIAGNOSIS SISTEM</h1>
      <div className="w-3/5 p-10 mx-auto bg-secondary rounded-lg">
        {result.nama ? (
          <div>
            <h1 className="text-white text-center text-2xl font-semibold">
              Nama Penyakit : <span className="underline">{result.nama}</span>
            </h1>
            <div>
              <h1 className="text-white text-lg font-normal mt-6">
                Apa itu <span className="font-semibold">{result.nama}</span>?
              </h1>
              <p className="ml-4 text-white"> ▶ {result.penjelasan}</p>
            </div>
            <div>
              <h1 className="text-white text-lg font-normal mt-6">
                Apa saja faktor terjadinya <span className="font-semibold">{result.nama}</span>?
              </h1>
              <p className="ml-4 text-white"> ▶ {result.faktor}</p>
            </div>
            <div>
              <h1 className="text-white text-lg font-normal mt-6">Apa solusi yang harus dilakukan?</h1>
              <p className="ml-4 text-white"> ▶ {result.solusi}</p>
            </div>
          </div>
        ) : (
          <div className="text-white text-center text-xl font-semibold">
            <h1>
              Maaf, sistem tidak mengetahui penyakit apa yang diderita berdasarkan gejala yang Anda alami. Kami
              rekomendasikan Anda untuk segera berkonsultasi atau memeriksa kondisi mata Anda dengan dokter spesialis
              mata.
            </h1>
            <h1 className="mt-4">Terima Kasih!</h1>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Link
          className="mt-4 mb-10 inline-block py-4 px-8 text-white text-lg font-semibold rounded-lg bg-secondary"
          to="../check"
        >
          Periksa Lagi
        </Link>
      </div>
    </div>
  );
};

export default EyesCheckResult;
