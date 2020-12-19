import React from "react";

const Output = (props) => {
  let plant = "";

  switch (props.pred) {
    case "0":
      plant = "Пар";
      break;
    case "1":
      plant = "Озимую пшеницу";
      break;
    case "2":
      plant = "Сою";
      break;
    case "3":
      plant = "Ячмень";
      break;
    case "4":
      plant = "Сахарную свеклу";
      break;
    default:
      break;
  }

  return <h3>Предпочтительнее посеять: {plant}</h3>;
};

export default Output;
