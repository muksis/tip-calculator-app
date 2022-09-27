import { Button } from 'react-bootstrap';

const padWithZeroes = (float) =>
  float % 1 === 0 ? `${float}.00` : String(Math.round(float * 100) / 100);

const Results = ({ tipAmount, total }) => {
  return (
    <div className='results'>
      <div>
        Tip Amount
        <sub>/ person</sub>
      </div>
      <div>${padWithZeroes(tipAmount)}</div>
      <div>
        Total
        <sub>/ person</sub>
      </div>
      <div>${padWithZeroes(total)}</div>
      <div>
        <Button>Reset</Button>
      </div>
    </div>
  );
};
export default Results;
