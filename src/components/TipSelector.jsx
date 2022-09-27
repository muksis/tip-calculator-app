import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TipSelector = ({ tipPercentage, setTipPercentage }) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleCustomInput = (e) => setTipPercentage(+e.target.value || 0);

  return (
    <div className='tipSelect d-flex flex-row flex-wrap mb-5'>
      <Button
        className='flex-fill'
        onClick={() => setTipPercentage(5)}
        active={tipPercentage === 5}
      >
        5%
      </Button>
      <Button
        className='flex-fill'
        onClick={() => setTipPercentage(10)}
        active={tipPercentage === 10}
      >
        10%
      </Button>
      <Button
        className='flex-fill'
        onClick={() => setTipPercentage(15)}
        active={tipPercentage === 15}
      >
        15%
      </Button>
      <Button
        className='flex-fill'
        onClick={() => setTipPercentage(25)}
        active={tipPercentage === 25}
      >
        25%
      </Button>
      <Button
        className='flex-fill'
        onClick={() => setTipPercentage(50)}
        active={tipPercentage === 50}
      >
        50%
      </Button>
      <Form.Control
        className='flex-fill'
        id='inputCustomTip'
        placeholder='Custom'
        autoComplete='off'
        type='number'
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
