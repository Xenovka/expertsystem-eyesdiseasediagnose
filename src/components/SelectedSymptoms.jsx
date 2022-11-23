import React from "react";

const SelectedSymptoms = ({ selectedSymptom, gejala, handleRemoveItem }) => {
  return (
    <div className="bg-secondary px-10 py-6 mt-10 rounded-lg">
      <h1 className="mb-4 text-white font-semibold">Gejala Pasien : </h1>
      {selectedSymptom.length ? (
        <ol className="list-disc">
          {selectedSymptom.map((s) =>
            gejala.map((g, i) =>
              s === g.val ? (
                <li key={i} className="text-base text-white pr-20 pb-2 relative">
                  {g.nama}{" "}
                  <span
                    title="Hapus"
                    onClick={handleRemoveItem}
                    className="bg-red-600 px-2 cursor-pointer font-bold rounded absolute right-0 top-0"
                  >
                    X
                  </span>
                </li>
              ) : (
                ""
              )
            )
          )}
        </ol>
      ) : (
        <h1 className="text-white font-normal">Gejala akan ditampilkan di sini.</h1>
      )}
    </div>
  );
};

export default SelectedSymptoms;
