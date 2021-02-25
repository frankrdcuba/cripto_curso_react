import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useMoneda = (label, stateInitial, opciones) => {
  const [state, setState] = useState(stateInitial);
  const Seleccionar = () => (
    <>
      <Label>{label}: </Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {opciones.map((option) => (
          <option key={option.codigo} value={option.codigo}>
            {option.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, Seleccionar, setState];
};

export default useMoneda;
