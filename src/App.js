import React, { useState } from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import Rpd from "./components/Rpd";
import Rpn from "./components/Rpn";

function App() {
  const [btn, setBtn] = useState(false);
  const [x2, setS] = useState("");
  const [x3, setLean] = useState("");
  const [x4, setLevel] = useState("");
  const [x5, setWeed] = useState("");
  const [x6, setProperty] = useState("");
  const [x7, setDistance] = useState("");
  const [x8, setField] = useState("");
  const [x9, setPlant2] = useState("");
  const [x10, setHerbicide2] = useState("");
  const [x11, setPlant1] = useState("");
  const [x12, setHerbicide1] = useState("");
  const [x13, setPlantNow] = useState("");
  const [x14, setHerbicideNow] = useState("");

  return (
    <div>
      <Container>
        <Button
          variant="success"
          onClick={() => {
            setBtn(true);
          }}
          block
        >
          Рассчёт по данным
        </Button>
        <Button
          variant="success"
          onClick={() => {
            setBtn(false);
          }}
          block
        >
          Рассчёт по excel данным
        </Button>
        {btn ? (
          <Rpd
            x2={x2}
            setS={setS.bind(this)}
            x3={x3}
            setLean={setLean}
            x4={x4}
            setLevel={setLevel}
            x5={x5}
            setWeed={setWeed}
            x6={x6}
            setProperty={setProperty}
            x7={x7}
            setDistance={setDistance}
            x8={x8}
            setField={setField}
            x9={x9}
            setPlant2={setPlant2}
            x10={x10}
            setHerbicide2={setHerbicide2}
            x11={x11}
            setPlant1={setPlant1}
            x12={x12}
            setHerbicide1={setHerbicide1}
            x13={x13}
            setPlantNow={setPlantNow}
            x14={x14}
            setHerbicideNow={setHerbicideNow}
          />
        ) : (
          <Rpn />
        )}
      </Container>
    </div>
  );
}

export default App;
