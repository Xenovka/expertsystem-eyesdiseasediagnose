import gejala from "../data/gejala";

export default function getSymptomCode(symptom) {
  const code = gejala.filter((g) => g.nama === symptom);
  return code[0].val;
}
