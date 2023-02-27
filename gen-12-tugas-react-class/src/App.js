import { useState } from "react";
import UpgradeAdd from "./Class";
import mcd from "./img/logo.png";

function App() {
  const [iceCream, setIceCream] = useState("Oreo McFlurry");

  return (
    <>
      <h1>
        <img src={mcd} alt="McDonalds"></img> McDonalds
      </h1>
      <UpgradeAdd upgrade={iceCream} />
      <button onClick={() => setIceCream("Mixed Berries McFlurry")}>Variant McFlurry (+3k)</button>
    </>
  );
}

export default App;
