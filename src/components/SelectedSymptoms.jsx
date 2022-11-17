import React from "react";

const SelectedSymptoms = ({ selectedSymptom, gejala }) => {
  return (
    <div className="bg-secondary px-10 py-6 mt-10 rounded-lg">
      <h1 className="mb-4 text-white font-semibold">Gejala Pasien : </h1>
      {selectedSymptom.length ? (
        <ol className="list-disc">
          {selectedSymptom.map((s) =>
            gejala.map((g, i) =>
              s === g.val ? (
                <li key={i} className="text-base text-white">
                  {g.nama}
                </li>
              ) : (
                ""
              )
            )
          )}
        </ol>
      ) : (
        <h1 className="text-white font-normal">Gejala Akan Ditampilkan Disini.</h1>
      )}
    </div>
  );
};

export default SelectedSymptoms;
