import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getSymptomCode from "../helpers/getSymptomCode";

import { gejala, penyakit } from "../data";
import SelectedSymptoms from "../components/SelectedSymptoms";

const CheckDisease = () => {
  const [selectedSymptom, setSelectedSymptom] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
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

  const onFormSubmit = (e) => {
    e.preventDefault();

    setSelectedSymptom([]);
    setBtnDisabled(true);
    navigate("../result", {
      replace: true,
      state: selectedSymptom
    });
  };

  const onItemRemove = (e) => {
    const removedSymptom = e.target.parentElement.innerText.split("\n")[0];
    const listSymptomsAfterRemove = selectedSymptom.filter((symptom) => symptom !== getSymptomCode(removedSymptom));
    setSelectedSymptom(listSymptomsAfterRemove);
    return;
  };

  return (
    <div className="px-10 py-6 flex justify-center items-center flex-col">
      <h1 className="font-extrabold text-tertiary mb-6 text-4xl">PERIKSA PENYAKIT MATA ANDA</h1>
      <h1 className="font-semibold text-tertiary mb-4">Pilih minimal {minSymptom} gejala!</h1>
      <form onSubmit={onFormSubmit}>
        <select
          name="selectedSymptom"
          value={selected}
          id="selectedSymptom"
          onChange={(e) => setSelectedSymptom([...selectedSymptom, e.target.value])}
          className="p-2 border border-black rounded-lg outline-none border-none"
        >
          <option value="select" disabled>
            Pilih Gejala
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
          value="Periksa"
          title={
            selected.length >= minSymptom
              ? "Mulai Periksa Penyakit"
              : `Tidak memenuhi jumlah minimum gejala (minimal ${minSymptom} gejala dipilih)`
          }
          disabled={btnDisabled}
        />
      </form>
      <SelectedSymptoms handleRemoveItem={onItemRemove} selectedSymptom={selectedSymptom} gejala={gejala} />
    </div>
  );
};

export default CheckDisease;
