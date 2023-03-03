import React from "react";
import "./MortgageCalculator.css";

const MortgageCalculator = () => {


    //States
    const [monthlyPayment, setMonthlyPayment] = React.useState(0);

    //Referencias a los inputs
      const houseValue = React.useRef();
      const savings = React.useRef();
      const numYears = React.useRef();
      const annualInterest = React.useRef();

      //call 4 references
      const getValuesAndCalculateMonthlyPayment = () => {

        const houseValue = houseValueRef.current.value;
        const savings = savingsRef.current.value;
        const numYears = numYearsRef.current.value;
        const annualInterest =annualInterestRef.current.value;

        calculateMonthlyPayment(houseValue, savings, annualInterest, numYears);
        console.log(payment);

      }

      const calculateMonthlyPayment = (houseValue, savings, annualInterest, numYears) => {
        const numMonths = numYears * 12 ; 
        const annualInterestDecimal = annualInterest / 100; 
        const monthlyInterest = annualInterestDecimal / 12; 
        const moneytoAsk = houseValue - savings; 
        const divider = (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest; 
        const monthPayment = moneytoAsk / divider; 
        return monthPayment;
      }


  return (
    <div className="calculator">
      
      <h2 className="calculator__title">Calculadora de Hipotecas</h2>
      
      <fieldset className="calculator__form">
        {/*Valor de la casa*/}
        <label className="calculator__form-box">
          <h2>Introduce el valor de la casa</h2>
          
          <button className="calculator__form-box-btn--neg">-</button>
          
          <input
            className="calculator__form-box-input"
            ref={houseValueRef}
            type="number"
            name="houseValue"
            id="houseValue"
            placeholder="Introduce el valor de la casa"
          />
          
          <button className="calculator__form-box-btn--pos">+</button>
        </label>
      </fieldset>

      {/*Ahorros*/}
      <fieldset className="calculator__form">
        
        <label className="calculator__form-box">
          <h2>Introduce Ahorros</h2>
          
          <button className="calculator__form-box-btn--neg">-</button>
          
          <input
            className="calculator__form-box-input"
            ref={savingsRef}
            type="number"
            name="savings"
            id="savings"
            placeholder="Ahorros"
          />
          
          <button className="calculator__form-box-btn--pos">+</button>
        </label>
      </fieldset>

      {/*Plazos*/}
      <fieldset className="calculator__form">
        
        <label className="calculator__form-box">
          <h2>Introduce el plazo en anos</h2>
          
          <button className="calculator__form-box-btn--neg">-</button>
          
          <input
            className="calculator__form-box-input"
            ref={numYearsRef}
            type="number"
            name="numYears"
            id="numYears"
            placeholder="Plazos"
          />
          
          <button className="calculator__form-box-btn--pos">+</button>
        </label>
      </fieldset>

      {/*Intereses*/}
      <fieldset className="calculator__form">
        
        <label className="calculator__form-box">
          <h2>Introduce el interes de la hipoteca (tipo fijo)</h2>
          
          <button className="calculator__form-box-btn--neg">-</button>
          
          <input
            className="calculator__form-box-input"
            ref={annualInterestRef}
            type="number"
            name="annualInterest"
            id="annualInterest"
            placeholder="Intereses"
          />
          
          <button className="calculator__form-box-btn--pos">+</button>
        </label>
      </fieldset>

      <button className="calculator__form-quote" onClick={getValuesAndCalculateMonthlyPayment}>Calcular cuota mensual</button>
      <p>Tu cuota mensual sera de: <strong>{monthlyPayment}</strong></p>
    </div>
  );
};

export default MortgageCalculator;
