import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Calculating from './Calculating';

const InputForm = () => {
    
const [x2, setS] = useState('');
const [x3, setLean] = useState('');
const [x4, setLevel] = useState('');
const [x5, setWeed] = useState('');
const [x6, setProperty] = useState('');
const [x7, setDistance] = useState('');
const [x8, setField] = useState('');
const [x9, setPlant2] = useState('');
const [x10, setHerbicide2] = useState('');
const [x11, setPlant1] = useState('');
const [x12, setHerbicide1] = useState('');
const [x13, setPlantNow] = useState('');
const [x14, setHerbicideNow] = useState('');

    return (
        <>
            <Form>
                <h1>Введите данные поля</h1>
                <Form.Group style={{ marginTop: '-10px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Площать в гектарах</Form.Label>
                    <Form.Control size="sm" value={x2} onChange={(e) => setS(e.target.value)} />
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Крутизна склона в градусах</Form.Label>
                    <Form.Control size="sm" value={x3} onChange={(e) => setLean(e.target.value)}/>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Уровень плодородия почв</Form.Label>
                    <Form.Control size="sm" as="select" value={x4} onChange={(e) => setLevel(e.target.value)}>
                    <option></option>
                <option value={1,2}>Высокий</option>
                <option value={1}>Средний</option>
                <option value={0,8}>Низкий</option>
                </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Наличие многолетних сорняков в прошлом году</Form.Label>
                    <Form.Control size="sm" as="select" value={x5} onChange={(e) => setWeed(e.target.value)}>
                    <option></option>
                    <option value={1}>+</option>
                <option value={0}>-</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Статус собственности на прошлый год</Form.Label>
                    <Form.Control size="sm" as="select" value={x6} onChange={(e) => setProperty(e.target.value)}>
                    <option></option>
                    <option value={1}>Собственность</option>
                <option value={0}>Истекает срок</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Расстоние до асфальта в км</Form.Label>
                    <Form.Control size="sm" value={x7} onChange={(e) => setDistance(e.target.value)}/>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Массив полей</Form.Label>
                    <Form.Control size="sm" as="select" value={x8} onChange={(e) => setField(e.target.value)}>
                    <option></option>
                    <option value={1}>Центр</option>
                <option value={2}>Восток</option>
                    <option value={3}>Слободка</option>
                <option value={4}>Дальний</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Культура 2 года назад</Form.Label>
                    <Form.Control size="sm" as="select" value={x9} onChange={(e) => setPlant2(e.target.value)}>
                    <option></option>
                    <option value={0}>Пар</option>
                <option value={1}>Озимая пшеница</option>
                    <option value={2}>Соя</option>
                <option value={3}>Ячмень</option>
                <option value={4}>Сахарная свекла</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Использование гербицида 2 года назад</Form.Label>
                    <Form.Control size="sm" as="select" value={x10} onChange={(e) => setHerbicide2(e.target.value)}>
                    <option></option>
                    <option value={0}>Нет</option>
                <option value={1}>Серп</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Культура год назад</Form.Label>
                    <Form.Control size="sm" as="select" value={x11} onChange={(e) => setPlant1(e.target.value)} >
                    <option></option>
                    <option value={0}>Пар</option>
                <option value={1}>Озимая пшеница</option>
                    <option value={2}>Соя</option>
                <option value={3}>Ячмень</option>
                <option value={4}>Сахарная свекла</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Использование гербицида год назад</Form.Label>
                    <Form.Control size="sm" as="select" value={x12} onChange={(e) => setHerbicide1(e.target.value)}>
                    <option></option>
                    <option value={0}>Нет</option>
                <option value={1}>Серп</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Культура в этом году</Form.Label>
                    <Form.Control size="sm" as="select" value={x13} onChange={(e) => setPlantNow(e.target.value)}>
                    <option></option>
                    <option value={0}>Пар</option>
                <option value={1}>Озимая пшеница</option>
                    <option value={2}>Соя</option>
                <option value={3}>Ячмень</option>
                <option value={4}>Сахарная свекла</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{ marginTop: '-15px'}} controlId="exampleForm.ControlInput13">
                    <Form.Label>Использование гербицида в этом году</Form.Label>
                    <Form.Control size="sm" as="select" value={x14} onChange={(e) => setHerbicideNow(e.target.value)}>
                    <option></option>
                    <option value={0}>Нет</option>
                <option value={1}>Серп</option>
                    </Form.Control>
                </Form.Group>
            </Form>
          
           <Calculating x2={x2}
            x3={x3}
            x4={x4}
            x5={x5}
            x6={x6}
            x7={x7}
            x8={x8}
            x9={x9}
            x10={x10}
            x11={x11}
            x12={x12}
            x13={x13}
            x14={x14} />

            </>
    )
}

export default InputForm
