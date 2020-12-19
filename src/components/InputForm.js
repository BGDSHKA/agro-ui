import React from "react";
import { Form } from "react-bootstrap";
import Calculating from "./Calculating";

const InputForm = ({ props }) => {
  return (
    <>
      <Form>
        <h1>Введите данные поля</h1>
        <Form.Group
          style={{ marginTop: "-10px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Площать в гектарах</Form.Label>
          <Form.Control
            size="sm"
            value={props.x2}
            onChange={(e) => props.setS(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Крутизна склона в градусах</Form.Label>
          <Form.Control
            size="sm"
            value={props.x3}
            onChange={(e) => props.setLean(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Уровень плодородия почв</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x4}
            onChange={(e) => props.setLevel(e.target.value)}
          >
            <option></option>
            <option value={(1, 2)}>Высокий</option>
            <option value={1}>Средний</option>
            <option value={(0, 8)}>Низкий</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Наличие многолетних сорняков в прошлом году</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x5}
            onChange={(e) => props.setWeed(e.target.value)}
          >
            <option></option>
            <option value={1}>+</option>
            <option value={0}>-</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Статус собственности на прошлый год</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x6}
            onChange={(e) => props.setProperty(e.target.value)}
          >
            <option></option>
            <option value={1}>Собственность</option>
            <option value={0}>Истекает срок</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Расстоние до асфальта в км</Form.Label>
          <Form.Control
            size="sm"
            value={props.x7}
            onChange={(e) => props.setDistance(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Массив полей</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x8}
            onChange={(e) => props.setField(e.target.value)}
          >
            <option></option>
            <option value={1}>Центр</option>
            <option value={2}>Восток</option>
            <option value={3}>Слободка</option>
            <option value={4}>Дальний</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Культура 2 года назад</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x9}
            onChange={(e) => props.setPlant2(e.target.value)}
          >
            <option></option>
            <option value={0}>Пар</option>
            <option value={1}>Озимая пшеница</option>
            <option value={2}>Соя</option>
            <option value={3}>Ячмень</option>
            <option value={4}>Сахарная свекла</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Использование гербицида 2 года назад</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x10}
            onChange={(e) => props.setHerbicide2(e.target.value)}
          >
            <option></option>
            <option value={0}>Нет</option>
            <option value={1}>Серп</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Культура год назад</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x11}
            onChange={(e) => props.setPlant1(e.target.value)}
          >
            <option></option>
            <option value={0}>Пар</option>
            <option value={1}>Озимая пшеница</option>
            <option value={2}>Соя</option>
            <option value={3}>Ячмень</option>
            <option value={4}>Сахарная свекла</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Использование гербицида год назад</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x12}
            onChange={(e) => props.setHerbicide1(e.target.value)}
          >
            <option></option>
            <option value={0}>Нет</option>
            <option value={1}>Серп</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Культура в этом году</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x13}
            onChange={(e) => props.setPlantNow(e.target.value)}
          >
            <option></option>
            <option value={0}>Пар</option>
            <option value={1}>Озимая пшеница</option>
            <option value={2}>Соя</option>
            <option value={3}>Ячмень</option>
            <option value={4}>Сахарная свекла</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ marginTop: "-15px" }}
          controlId="exampleForm.ControlInput13"
        >
          <Form.Label>Использование гербицида в этом году</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.x14}
            onChange={(e) => props.setHerbicideNow(e.target.value)}
          >
            <option></option>
            <option value={0}>Нет</option>
            <option value={1}>Серп</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Calculating props={props} />
    </>
  );
};

export default InputForm;
