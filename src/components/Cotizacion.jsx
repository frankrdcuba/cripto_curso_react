import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ResultadoD = styled.div`
  color: #fff;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoD>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio mas alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio mas bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Vatiación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoD>
  );
};
Cotizacion.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Cotizacion;
