import React from "react";
import "./MortgageCalculator.css";

const MortgageCalculator = () => {
  //States
  const [monthlyPayment, setMonthlyPayment] = React.useState(0);
  const [houseValue, setHouseValue] = React.useState(0);
  const [savingsValue, setSavingsValue] = React.useState(0);
  const [numYearsValue, setNumYearsValue] = React.useState(0);
  const [annualInterestValue, setAnnualInterestValue] = React.useState(0);

  //Referencias a los inputs
  const houseValueRef = React.useRef();
  const savingsRef = React.useRef();
  const numYearsRef = React.useRef();
  const annualInterestRef = React.useRef();

  //call 4 references
  const getValuesAndCalculateMonthlyPayment = () => {
    const houseValue = houseValueRef.current.value;
    const savings = savingsRef.current.value;
    const numYears = numYearsRef.current.value;
    const annualInterest = annualInterestRef.current.value;

    const payment = calculateMonthlyPayment(
      houseValue,
      savings,
      annualInterest,
      numYears
    );
    setMonthlyPayment(payment);
  };

  const calculateMonthlyPayment = (
    houseValue,
    savings,
    annualInterest,
    numYears
  ) => {
    const numMonths = numYears * 12;
    const annualInterestDecimal = annualInterest / 100;
    const monthlyInterest = annualInterestDecimal / 12;
    const moneytoAsk = houseValue - savings;
    const divider =
      (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
    const monthPayment = moneytoAsk / divider;
    return monthPayment;
  };

  //button functions

  //House Value
  const handleHouseValueDecrease = () => {
    if (houseValue >= 5000) {
      setHouseValue(houseValue - 5000);
    }
  };
  const handleHouseValueIncrease = () => {
    setHouseValue((prev) => prev + 5000);
  };

  //Savings
  const handleSavingsValueDecrease = () => {
    if (savingsValue >= 1000) {
      setSavingsValue(savingsValue - 1000);
    }
  };
  const handleSavingsValueIncrease = () => {
    setSavingsValue((prev) => prev + 1000);
  };

  //Installments
  const handleNumYearsValueDecrease = () => {
    if (numYearsValue >= 1) {
      setNumYearsValue(numYearsValue - 1);
    }
  };
  const handleNumYearsValueIncrease = () => {
    setNumYearsValue((prev) => prev + 1);
  };

  //Interest Rates
  const handleAnnualInterestValueDecrease = () => {
    if (annualInterestValue >= 0.01) {
      setAnnualInterestValue(annualInterestValue - 0.01);
    }
  };
  const handleAnnualInterestValueIncrease = () => {
    setAnnualInterestValue((prev) => prev + 0.01);
  };

  return (
    <div className="calculator">
      <h2 className="calculator__title">Calculadora de Hipotecas</h2>

      <fieldset className="calculator__form">
        {/*Valor de la casa*/}
        <label className="calculator__form-box">
          <h2>Introduce el valor de la casa</h2>

          <button
            onClick={handleHouseValueDecrease}
            className="calculator__form-box-btn--neg"
          >
            -
          </button>

          <input
            className="calculator__form-box-input"
            ref={houseValueRef}
            type="number"
            name="houseValue"
            id="houseValue"
            placeholder="Introduce el valor de la casa"
            value={houseValue}
            onChange={(event) => setHouseValue(Number(event.target.value))}
          />

          <button
            onClick={handleHouseValueIncrease}
            className="calculator__form-box-btn--pos"
          >
            +
          </button>
        </label>
      </fieldset>

      {/*Ahorros*/}
      <fieldset className="calculator__form">
        <label className="calculator__form-box">
          <h2>Introduce Ahorros</h2>

          <button
            onClick={handleSavingsValueDecrease}
            className="calculator__form-box-btn--neg"
          >
            -
          </button>

          <input
            className="calculator__form-box-input"
            ref={savingsRef}
            type="number"
            name="savings"
            id="savings"
            value={savingsValue}
            placeholder="Ahorros"
            onChange={(event) => setSavingsValue(Number(event.target.value))}
          />

          <button
            onClick={handleSavingsValueIncrease}
            className="calculator__form-box-btn--pos"
          >
            +
          </button>
        </label>
      </fieldset>

      {/*Plazos*/}
      <fieldset className="calculator__form">
        <label className="calculator__form-box">
          <h2>Introduce el plazo en anos</h2>

          <button
            onClick={handleNumYearsValueDecrease}
            className="calculator__form-box-btn--neg"
          >
            -
          </button>
          <input
            className="calculator__form-box-input"
            ref={numYearsRef}
            type="number"
            name="numYears"
            id="numYears"
            placeholder="Plazos"
            value={numYearsValue}
            onChange={(event) => setNumYearsValue(Number(event.target.value))}
          />

          <button
            onClick={handleNumYearsValueIncrease}
            className="calculator__form-box-btn--pos"
          >
            +
          </button>
        </label>
      </fieldset>

      {/*Intereses*/}
      <fieldset className="calculator__form">
        <label className="calculator__form-box">
          <h2>Introduce el interes de la hipoteca (tipo fijo)</h2>

          <button
            onClick={handleAnnualInterestValueDecrease}
            className="calculator__form-box-btn--neg"
          >
            -
          </button>

          <input
            className="calculator__form-box-input"
            ref={annualInterestRef}
            type="number"
            name="annualInterest"
            id="annualInterest"
            placeholder="Intereses"
            value={annualInterestValue.toFixed(2)}
            onChange={(event) => setAnnualInterestValue(Number(event.target.value))}
          />

          <button
            onClick={handleAnnualInterestValueIncrease}
            className="calculator__form-box-btn--pos"
          >
            +
          </button>
        </label>
      </fieldset>

      <button
        className="calculator__form-quote"
        onClick={getValuesAndCalculateMonthlyPayment}
      >
        Calcular cuota mensual
      </button>
      <p className="calculator__form-total">
        Tu cuota mensual sera de: <strong>{monthlyPayment.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default MortgageCalculator;
