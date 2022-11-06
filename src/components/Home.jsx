import React, { useState } from "react";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import gejala from "./data/gejala";
import penyakit from "./data/penyakit";

const Home = () => {

  const [userInfo, setUserInfo] = useState([]);

  const validation = Yup.object().shape({
    checkbox: Yup.array().min(1).of(Yup.string().required()).required().nullable(),
  })

  const optionsForm = { resolver: yupResolver(validation) }
  const { handleSubmit, reset, register, formState } = useForm(optionsForm)
  const { errors } = formState

  const handleChange = (e) => {
    if (e.target.checked) {
      setUserInfo([...userInfo, e.target.value]);
    } else {
      setUserInfo(userInfo.filter((x) => x !== e.target.value));
    }
  }

  const result = { disease: [{nama: "", gejala: [], penjelasan: "", faktor: "", solusi: ""}], match: false };

  const onFormSubmit = () => {
    penyakit.map(function(p) {
      if (p.gejala.every(g => userInfo.includes(g))) {
        result.disease.push(p);
        result.match = true; 
      } else if (p.gejala.some(e => userInfo.includes(e))) {
        result.disease.push(p);
        result.match = true; 
      }
      return result;
    })

    if (result.match) 
      alert(`Penyakit: ${ result.disease.slice(1).map(function(e) {return e.nama;}) }`);
    else 
      alert("None");

    reset({});
  };

  return (
    <div>
      <h1 className="font-bold">Gejala</h1>
      <div className="text-red-500">{errors.checkbox?.message}</div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {(() => {
            let row = [];
            for (let i = 0; i < gejala.length; i++) {
              row.push(<input type="checkbox" {...register('checkbox')} value={gejala[i].val} onChange={handleChange}></input>);
              row.push(<label>{gejala[i].nama}<br/></label>);
            }
            return row;
          })()
        }
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Home;
