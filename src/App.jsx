import { useState } from "react";

import { data } from "./data/data";

import "./App.css";

import CalcImc from "./components/CalcImc";

import ImcTable from "./components/ImcTable";

function App() {
  const [imc, setImc] = useState("");
  const [info, setinfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  function calcImc(e, height, weight) {
    e.preventDefault();

    if ((!height, !weight)) return;

    const heightFloat = +height.replace(",", ".");

    const weightFloat = +weight.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setinfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  }

  function resetCalc(e) {
    e.preventDefault();
    setImc("");
    setinfo("");
    setInfoClass("");
  }

  return (
    <div className="container">
      {!imc ?  (
        <CalcImc calcImc={calcImc} />
      ) : (
        <ImcTable
          imc={imc}
          data={data}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App;
