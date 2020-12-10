import { Component } from 'react';
import Button from '../components/button';
import Display from '../components/display';

class Calculator extends Component {
  initialState = { firstValue: 0, secondValue: 0, operator: 1, isSum: false };
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  getValue = () => {
    const { firstValue, secondValue, isSum, operator } = this.state;

    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        return isSum ? firstValue + secondValue : firstValue - secondValue;
      default:
    }
  };

  putValue = (value) => {
    const { firstValue, secondValue, operator } = this.state;

    const lastValue = operator === 1 ? firstValue : secondValue;
    switch (operator) {
      case 1:
        this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2:
        this.setState({ secondValue: lastValue * 10 + value });
        break;
      default:
    }
  };

  pickOperation = (isSum) => {
    this.setState({ operator: 2, isSum });
  };

  execOperation = () => {
    this.setState({ operator: 3 });
  };

  clear = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className={'calculator'}>
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={'buttonsContainer'}>
          <Button display={'1'} onClick={() => this.putValue(1)} />
          <Button display={'2'} onClick={() => this.putValue(2)} />
          <Button display={'3'} onClick={() => this.putValue(3)} />
          <Button display={'4'} onClick={() => this.putValue(4)} />
          <Button display={'5'} onClick={() => this.putValue(5)} />
          <Button display={'6'} onClick={() => this.putValue(6)} />
          <Button display={'7'} onClick={() => this.putValue(7)} />
          <Button display={'8'} onClick={() => this.putValue(8)} />
          <Button display={'1'} onClick={() => this.putValue(9)} />
          <Button display={'0'} onClick={() => this.putValue(0)} />
          <Button display={'+'} onClick={() => this.pickOperation(true)} />
          <Button display={'-'} onClick={() => this.pickOperation(false)} />
          <Button display={'/'} />
          <Button display={'*'} />
          <Button display={'C'} onClick={() => this.clear()} />
          <Button display={'='} onClick={() => this.execOperation()} />
        </div>
      </div>
    );
  }
}

export default Calculator;
