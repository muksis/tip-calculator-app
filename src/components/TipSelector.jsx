import { Button, Form } from 'react-bootstrap';

const TipSelector = () => {
  return (
    <div className='tipSelect'>
      <Button>5%</Button>
      <Button>10%</Button>
      <Button>15%</Button>
      <Button>25%</Button>
      <Button>50%</Button>
      <Form.Control
        id='inputCustomTip'
        placeholder='Custom'
        autoComplete='off'
      />
    </div>
  );
};
export default TipSelector;
