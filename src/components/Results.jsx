import { Button } from 'react-bootstrap';

const Results = () => {
  return (
    <div className='results'>
      <div>
        Tip Amount
        <sub>/ person</sub>
      </div>
      <div>
        Total
        <sub>/ person</sub>
      </div>
      <div>
        <Button>Reset</Button>
      </div>
    </div>
  );
};
export default Results;
