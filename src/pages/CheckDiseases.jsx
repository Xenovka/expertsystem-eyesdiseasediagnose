import React, { useState, useEffect } from "react";

import { gejala, penyakit } from "../data";

const CheckDisease = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [selected, setSelected] = useState("select");

  const result = { disease: [{ nama: "", gejala: [], penjelasan: "", faktor: "", solusi: "" }], match: false };

  useEffect(() => {
    if (symptoms.length >= 1) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
      setSelected("select");
    }
  }, [symptoms]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    penyakit.map((p) => {
      if (p.gejala.every((g) => symptoms.includes(g))) {
        result.disease.push(p);
        result.match = true;
      } else if (p.gejala.some((g) => symptoms.includes(g))) {
        result.disease.push(p);
        result.match = true;
      }
      return result;
    });

    if (result.match) {
      alert(
        `Penyakit: ${result.disease.slice(1).map((e) => {
          return e.nama;
        })}`
      );
    } else {
      alert("Sorry, no diseases were found from the given symptom(s).");
    }

    console.log(symptoms, result.disease);
    setSymptoms([]);
    setBtnDisabled(true);
  };

  return (
    <div className="px-10 py-6 flex justify-center items-center flex-col">
      <h1 className="font-bold mb-4">Select the Symptom(s)</h1>
      <form onSubmit={onFormSubmit}>
        <select
          name="symptoms"
          value={selected}
          id="symptoms"
          onChange={(e) => setSymptoms([...symptoms, e.target.value])}
          className="p-2 border border-solid border-black rounded-lg"
        >
          <option value="select" disabled>
            Select Symptom
          </option>
          {gejala.map((g) => (
            <option key={g.val} value={g.val}>
              {g.nama}
            </option>
          ))}
        </select>
        <input
          className="block mt-6 bg-green-400 border-0 border-solid border-sky-500 px-6 py-2 rounded text-white font-bold cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed transition-all ease-in"
          type="submit"
          value="Submit"
          disabled={btnDisabled}
        />
      </form>
      {symptoms.length >= 1 && <h1 className="mt-5 font-semibold">Selected Symptom(s) : </h1>}
      <ol className="mt-5">
        {symptoms.map((s) =>
          gejala.map((g, i) =>
            s === g.val ? (
              <li key={i} className="text-base">
                - {g.nama}
              </li>
            ) : (
              ""
            )
          )
        )}
      </ol>
    </div>
  );
};

export default CheckDisease;
