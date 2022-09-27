import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import iconDollar from '../images/icon-dollar.svg';
import iconPerson from '../images/icon-person.svg';

const Calculator = () => {
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
            <Form.Control id='inputBill' placeholder='0' autoComplete='off' />
          </InputGroup>
          {/* Tip */}
          <Form.Label>Select Tip %</Form.Label>
          {/* Tip Selector */}
          {/* Number of People */}
          <Form.Label htmlFor='inputNumberOfPeople'>
            Number of People
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <img src={iconPerson} alt='Person icon' />
            </InputGroup.Text>
            <Form.Control id='inputBill' placeholder='0' autoComplete='off' />
          </InputGroup>
        </Col>
        <Col>{/* Results */}</Col>
      </Row>
    </Container>
  );
};

export default Calculator;
