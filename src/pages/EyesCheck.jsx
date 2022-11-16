import React, { useState, useEffect } from "react";

import { gejala, penyakit } from "../data";

const CheckDisease = () => {
  const [selectedSymptom, setSelectedSymptoms] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [selected, setSelected] = useState("select");

  const result = { disease: [{ nama: "", gejala: [], penjelasan: "", faktor: "", solusi: "" }], match: false };

  const minSymptom = Math.min(
    ...penyakit.map((p) => {
      let listLength = [];
      listLength.push(p.gejala.length);

      return listLength;
    })
  );

  const isSelectedMoreThanMin = selected >= minSymptom;

  useEffect(() => {
    if (selectedSymptom.length >= minSymptom) {
      setBtnDisabled(false);
    } else if (selectedSymptom.length < minSymptom) {
      setBtnDisabled(true);
      setSelected("select");
    }
  }, [selectedSymptom, minSymptom]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    penyakit.map((p) => {
      if (p.gejala.every((g) => selectedSymptom.includes(g)) && p.gejala.length === selectedSymptom.length) {
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

    console.log(selectedSymptom, result.disease);
    setSelectedSymptoms([]);
    setBtnDisabled(true);
  };

  return (
    <div className="px-10 py-6 flex justify-center items-center flex-col">
      <h1 className="font-extrabold text-tertiary mb-6 text-4xl">CHECK YOUR EYES CONDITION</h1>
      <h1 className="font-semibold text-tertiary mb-4">Requires {minSymptom} Symptoms Selected!</h1>
      <form onSubmit={onFormSubmit}>
        <select
          name="selectedSymptom"
          value={selected}
          id="selectedSymptom"
          onChange={(e) => setSelectedSymptoms([...selectedSymptom, e.target.value])}
          className="p-2 border border-black rounded-lg outline-none border-none"
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
          className="block mt-6 bg-secondary border-0 border-solid border-sky-500 px-6 py-2 rounded text-white font-bold cursor-pointer disabled:!bg-gray-500 disabled:cursor-not-allowed transition-all ease-in"
          type="submit"
          value="Check"
          title={
            isSelectedMoreThanMin
              ? "Start Diseases Checking"
              : `Not enough symptom selected (required ${minSymptom} symptoms)`
          }
          disabled={btnDisabled}
        />
      </form>
      {selectedSymptom.length >= 1 && <h1 className="mt-5 text-tertiary font-semibold">Selected Symptom(s) : </h1>}
      <ol className="mt-5 list-disc">
        {selectedSymptom.map((s) =>
          gejala.map((g, i) =>
            s === g.val ? (
              <li key={i} className="text-base text-tertiary">
                {g.nama}
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
