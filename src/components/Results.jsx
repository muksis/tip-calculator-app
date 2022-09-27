import { Button } from 'react-bootstrap';

const padWithZeroes = (float) =>
  float % 1 === 0 ? `${float}.00` : String(Math.round(float * 100) / 100);

const Results = ({ tipAmount, total, onReset }) => {
  return (
    <div className='results d-flex flex-row flex-wrap'>
      <div className='valueTitle'>
        Tip Amount
        <sub>/ person</sub>
      </div>
      <div className='numericValue'>${padWithZeroes(tipAmount)}</div>
      <div className='valueTitle'>
        Total
        <sub>/ person</sub>
      </div>
      <div className='numericValue'>${padWithZeroes(total)}</div>
      <div>
        <Button
          className='resetButton'
          disabled={total === 0}
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
export default Results;
