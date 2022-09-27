import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import iconDollar from '../images/icon-dollar.svg';
import iconPerson from '../images/icon-person.svg';
import TipSelector from './TipSelector';
import Results from './Results';

const Calculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const parsedBillAmount = parseFloat(billAmount) || 0;
    const parsedTipMultiplier = (parseFloat(tipPercentage) || 0) / 100;
    const parsedNumberOfPeople = parseInt(numberOfPeople, 10) || 0;
    setTipAmount(
      parsedNumberOfPeople
        ? Math.round(
            ((parsedBillAmount * parsedTipMultiplier) / parsedNumberOfPeople) *
              100
          ) / 100
        : 0
    );
    setTotal(
      parsedNumberOfPeople
        ? Math.round(
            ((parsedBillAmount * (1 + parsedTipMultiplier)) /
              parsedNumberOfPeople) *
              100
          ) / 100
        : 0
    );
  }, [billAmount, numberOfPeople, tipPercentage]);

  const numberValidation = /^(|[0-9]+)$/;
  const handleBillAmountInput = (e) => {
    const newValue = e.target.value;
    if (numberValidation.test(newValue)) {
      setBillAmount(parseInt(newValue, 10) || 0);
    }
  };

  const handleNumberOfPeopleInput = (e) => {
    const newValue = e.target.value;
    if (numberValidation.test(newValue)) {
      setNumberOfPeople(parseInt(newValue, 10) || 0);
    }
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
          <Results tipAmount={tipAmount} total={total} />
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
