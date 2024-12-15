import Button from "./Button";

import "./CalcImc.css";

import { useState } from "react";

const CalcImc = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^ 0-9,]/g, "");
  };

  function handleHeight(e) {
    const updateValue = validDigits(e.target.value);
    setHeight(updateValue);
  }

  function handleWeight(e) {
    const updateValue = validDigits(e.target.value);
    setWeight(updateValue);
    console.log(updateValue);
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>

      <form id="imc-form">
        <div id="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,70"
              onChange={(e) => handleHeight(e)}
              value={height}
            />
          </div>

          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 80,5"
              onChange={(e) => handleWeight(e)}
              value={weight}
            />
          </div>

          <div className="action-control">
            <Button
              id="calc-btn"
              text="Calcular"
              action={(e) => calcImc(e, height, weight)}
            />
            <Button id="clear-btn" text="Limpar" action={clearForm} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CalcImc;
