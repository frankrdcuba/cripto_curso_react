import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import PropTypes from "prop-types";

import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Formulario = ({ setMoneda, setCriptomoneda }) => {
  const [listacripto, setListaCripto] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);
  const [cripto, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listacripto,
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setListaCripto(result.data.Data);
    };
    consultarApi();
  }, []);

  const hanledSubmit = (e) => {
    e.preventDefault();
    if (moneda === "" || cripto === "") {
      setError(true);
      return;
    }
    setError(false);
    setMoneda(moneda);
    setCriptomoneda(cripto);
  };

  return (
    <form onSubmit={hanledSubmit}>
      {error ? <Error mensaje="Todos lo campos son obligatorios" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCriptomoneda: PropTypes.func.isRequired,
};

export default Formulario;
