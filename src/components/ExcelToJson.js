import React from "react";
import * as XLSX from "xlsx";
import { Form, Button } from "react-bootstrap";
import TableFromExcel from "./TableFromExcel";
import Info from "./Info";

class ExcelToJson extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
      name: "",
      excel: [],
      display: false,
      disableBtn: true,
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    var namef = e.target.files[0].name;
    this.setState({ file: file, name: namef });
    this.setState({ disableBtn: false });
  }

  readFile() {
    var f = this.state.file;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      var data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

      this.setState({ excel: this.convertToJson(data) });
    };
    reader.readAsBinaryString(f);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result;
  }

  render() {
    return (
      <div>
        <br></br>
        <Form>
          <Form.File
            type="file"
            id="file"
            ref="fileUploader"
            label={this.state.name}
            onChange={this.filePathset.bind(this)}
            custom
          />
        </Form>
        {this.state.display ? (
          <Button
            variant="success"
            onClick={() => {
              this.setState({ display: !this.state.display });
            }}
            block
          >
            Показать информацию
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={() => {
              this.readFile();
              this.setState({ display: !this.state.display });
            }}
            block
            disabled={this.state.disableBtn}
          >
            Применить датасет
          </Button>
        )}
        {this.state.display ? (
          <TableFromExcel state={this.state.excel} />
        ) : (
          <>
            <br></br>
            <Info />
          </>
        )}
      </div>
    );
  }
}

export default ExcelToJson;
