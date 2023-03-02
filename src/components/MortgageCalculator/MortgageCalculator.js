import React from "react";
import "./MortgageCalculator.css";

const MortgageCalculator = () => {
  return (
    <div className="calculator">
      <h2 className="calculator__title">Calculadora de Hipotecas</h2>
      <fieldset className="calculator__form">
        <label className="calculator__form-box">
          <h2>Introduce el valor de la casa</h2>
          <button className="calculator__form-box-btn">-</button>
          <input
            className="calculator__form-box-input"
            type="number"
            name="houseValue"
            id="houseValude"
            placeholder="Introduce el valor de la casa"
          />
          <button className="calculator__form-box-btn">+</button>
        </label>
      </fieldset>
    </div>
  );
};

export default MortgageCalculator;
