import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import iconDollar from '../images/icon-dollar.svg';
import iconPerson from '../images/icon-person.svg';
import TipSelector from './TipSelector';
import Results from './Results';

const Calculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');

  const handleBillAmountInput = (e) => {
    setBillAmount(+e.target.value);
  };

  const handleNumberOfPeopleInput = (e) => {
    setNumberOfPeople(+e.target.value);
  };

  return (
    <Container className='calculator'>
      <Row>
        <Col>
          <Form.Label htmlFor='inputBill'>Bill</Form.Label>
          {/* Bill */}
          <InputGroup>
            <InputGroup.Text>
              <img src={iconDollar} alt='Dollar icon' />
            </InputGroup.Text>
            <Form.Control
              id='inputBill'
              placeholder='0'
              autoComplete='off'
              value={billAmount !== 0 ? billAmount : ''}
              onChange={handleBillAmountInput}
            />
          </InputGroup>
          {/* Tip */}
          <Form.Label>Select Tip %</Form.Label>
          <TipSelector
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
          />
          {/* Number of People */}
          <Form.Label htmlFor='inputNumberOfPeople'>
            Number of People
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <img src={iconPerson} alt='Person icon' />
            </InputGroup.Text>
            <Form.Control
              id='inputPerson'
              placeholder='0'
              autoComplete='off'
              value={numberOfPeople !== 0 ? numberOfPeople : ''}
              onChange={handleNumberOfPeopleInput}
            />
          </InputGroup>
        </Col>
        <Col>
          <Results />
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
