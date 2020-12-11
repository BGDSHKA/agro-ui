import React from 'react'
import { Container, Form } from 'react-bootstrap';

const InputForm = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Площать в гектарах</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Крутизна склона в градусах</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Уровень плодородия почв</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Наличие многолетних сорняков в прошлом году</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Статус собственности на прошлый год</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Расстоние до асфальта в км</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Массив полей</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default InputForm
