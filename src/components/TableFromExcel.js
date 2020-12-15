import React from 'react'
import {Table} from 'react-bootstrap'
import DecisionTree from "decision-tree";
import data from "./Data"

const TableFromExcel = (props) => {

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
    props.state.forEach(e => {
        var predicted_class = dt.predict({
            x2: e.x2,
            x3: e.x3,
            x4: e.x4,
            x5: e.x5,
            x6: e.x6,
            x7: e.x7,
            x8: e.x8,
            x9: e.x9,
            x10: e.x10,
            x11: e.x11,
            x12: e.x12,
            x13: e.x13,
            x14: e.x14,
          });
          e.y1=predicted_class;    
    });
    

let array = props.state.map(u => 
<tbody><tr><th key={u.x1}>{u.x1}</th><td>{u.x2}</td><td>{u.x3}</td>
<td>{u.x4}</td><td>{u.x5}</td><td>{u.x6}</td><td>{u.x7}</td><td>{u.x8}</td>
<td>{u.x9}</td><td>{u.x10}</td><td>{u.x11}</td><td>{u.x12}</td>
<td>{u.x13}</td><td>{u.x14}</td><td>{u.y1}</td></tr></tbody>)
console.log(props.state)
    return (
        <Table size='sm' responsive>
            <thead><tr><th>№</th><th>x2</th><th>x3</th><th>x4</th>
            <th>x5</th><th>x6</th><th>x7</th><th>x8</th><th>x9</th><th>x10</th>
            <th>x11</th><th>x12</th><th>x13</th><th>x14</th><th>y1</th></tr></thead>
            {array}
        </Table>
    )
}

export default TableFromExcel
