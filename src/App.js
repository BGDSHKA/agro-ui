import React, {useState}  from 'react'
import './App.css';
import { Button, Container } from 'react-bootstrap';
import Rpd from './components/Rpd';
import Rpn from './components/Rpn';

function App() {
  const [btn, setBtn] = useState(false);
 
  return (
    <div>
      <Container>
        <Button variant="success" onClick={ () => {setBtn(true);}} block>Рассчёт по данным</Button>
        <Button variant="success" onClick={ () => {setBtn(false);}} block>Рассчёт по excel данным</Button>
        { btn ?  <Rpd /> : <Rpn /> }
      </Container>
    </div>
  );
}

export default App;
