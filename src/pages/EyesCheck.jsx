import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { gejala, penyakit } from "../data";
import SelectedSymptoms from "../components/SelectedSymptoms";

const CheckDisease = () => {
  const [selectedSymptom, setSelectedSymptoms] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const selected = "select";

  const minSymptom = Math.min(
    ...penyakit.map((p) => {
      let listLength = [];
      listLength.push(p.gejala.length);

      return listLength;
    })
  );

  useEffect(() => {
    if (selectedSymptom.length >= minSymptom) {
      setBtnDisabled(false);
    } else if (selectedSymptom.length < minSymptom) {
      setBtnDisabled(true);
    }
  }, [selectedSymptom, minSymptom]);

  useEffect(() => {
    penyakit.map((p) => {
      if (p.gejala.every((g) => selectedSymptom.includes(g)) && p.gejala.length === selectedSymptom.length) {
        setResult(p);
      }

      return result;
    });

    console.log(result);
  }, [selectedSymptom, result]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    setSelectedSymptoms([]);
    setBtnDisabled(true);
    navigate("../result", {
      replace: true,
      state: result
    });
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
          className="block mt-6 bg-secondary px-6 py-2 rounded text-white font-bold cursor-pointer disabled:!bg-gray-600 disabled:cursor-not-allowed transition-all ease-in"
          type="submit"
          value="Check"
          title={
            selected.length >= minSymptom
              ? "Start Diseases Checking"
              : `Not enough symptom selected (required ${minSymptom} symptoms)`
          }
          disabled={btnDisabled}
        />
      </form>
      <SelectedSymptoms selectedSymptom={selectedSymptom} gejala={gejala} />
    </div>
  );
};

export default CheckDisease;
