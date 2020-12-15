import React from "react";
import DecisionTree from "decision-tree";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Output from "./Output";
import data from "./Data"

const Calculating = (props) => {
  const [pred, setPred] = useState(0);

  return (
    <>
      <Button variant="success"
        onClick={() => {
          const training_data = data;

          var class_name = "y1";
          var features = [
            "x2",
            "x3",
            "x4",
            "x5",
            "x6",
            "x7",
            "x8",
            "x9",
            "x10",
            "x11",
            "x12",
            "x13",
            "x14",
          ];

          var dt = new DecisionTree(training_data, class_name, features);
          var predicted_class = dt.predict({
            x2: props.x2,
            x3: props.x3,
            x4: props.x4,
            x5: props.x5,
            x6: props.x6,
            x7: props.x7,
            x8: props.x8,
            x9: props.x9,
            x10: props.x10,
            x11: props.x11,
            x12: props.x12,
            x13: props.x13,
            x14: props.x14,
          });
          console.log(props)
          setPred(predicted_class);
        }}
        block>
        Рассчитать
      </Button>
    <Output pred={pred} /> 
    </>
  );
};

export default Calculating;
