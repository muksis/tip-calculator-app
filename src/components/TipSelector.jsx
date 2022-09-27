import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TipSelector = ({ tipPercentage, setTipPercentage }) => {
  const [isTyping, setIsTyping] = useState(false);

  const numberValidation = /^(|[0-9]+)$/;
  const handleCustomInput = (e) => {
    const newValue = e.target.value;
    if (numberValidation.test(newValue)) {
      setTipPercentage(parseInt(newValue, 10) || 0);
    }
  };

  return (
    <div className='tipSelect'>
      <Button onClick={() => setTipPercentage(5)} active={tipPercentage === 5}>
        5%
      </Button>
      <Button
        onClick={() => setTipPercentage(10)}
        active={tipPercentage === 10}
      >
        10%
      </Button>
      <Button
        onClick={() => setTipPercentage(15)}
        active={tipPercentage === 15}
      >
        15%
      </Button>
      <Button
        onClick={() => setTipPercentage(25)}
        active={tipPercentage === 25}
      >
        25%
      </Button>
      <Button
        onClick={() => setTipPercentage(50)}
        active={tipPercentage === 50}
      >
        50%
      </Button>
      <Form.Control
        id='inputCustomTip'
        placeholder='Custom'
        autoComplete='off'
        value={
          isTyping || [0, 5, 10, 15, 25, 50].indexOf(tipPercentage) === -1
            ? tipPercentage
            : ''
        }
        onChange={handleCustomInput}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      />
    </div>
  );
};
export default TipSelector;
