import { Component } from 'react';
import Button from '../components/button';
import Display from '../components/display';

class Calculator extends Component {
  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    operation: 0,
    divisionZero: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  getValue = () => {
    const { firstValue, secondValue, operation, operator } = this.state;

    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        return operation === 1
          ? firstValue + secondValue
          : operation === 2
          ? firstValue - secondValue
          : operation === 3
          ? firstValue * secondValue
          : operation === 5
          ? firstValue ** 2
          : secondValue === 0
          ? 'Divisão inválida'
          : firstValue / secondValue;
      case 4:
        return firstValue ** 2;
      default:
    }
  };

  putValue = (value) => {
    const { firstValue, secondValue, operator } = this.state;
    if (value === 0) {
      this.setState({ divisionZero: true });
    }

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

  pickOperation = (operation) => {
    this.setState({ operator: 2, operation });
  };

  execOperation = () => {
    this.setState({ operator: 3 });
  };

  clear = () => {
    this.setState(this.initialState);
  };

  render() {
    const { operator } = this.state;

    return (
      <div className={'calculator'}>
        <div>
          <Display
            operation={this.state.operation}
            zero={this.state.divisionZero}
            value={this.getValue()}
          />
        </div>
        <div className={'buttonsContainer'}>
          <Button
            display={'1'}
            onClick={() => this.putValue(1)}
            disabled={operator === 3}
          />
          <Button
            display={'2'}
            onClick={() => this.putValue(2)}
            disabled={operator === 3}
          />
          <Button
            display={'3'}
            onClick={() => this.putValue(3)}
            disabled={operator === 3}
          />
          <Button
            display={'4'}
            onClick={() => this.putValue(4)}
            disabled={operator === 3}
          />
          <Button
            display={'5'}
            onClick={() => this.putValue(5)}
            disabled={operator === 3}
          />
          <Button
            display={'6'}
            onClick={() => this.putValue(6)}
            disabled={operator === 3}
          />
          <Button
            display={'7'}
            onClick={() => this.putValue(7)}
            disabled={operator === 3}
          />
          <Button
            display={'8'}
            onClick={() => this.putValue(8)}
            disabled={operator === 3}
          />
          <Button
            display={'1'}
            onClick={() => this.putValue(9)}
            disabled={operator === 3}
          />
          <Button
            display={'0'}
            onClick={() => this.putValue(0)}
            disabled={operator === 3}
          />
          <Button
            display={'+'}
            onClick={() => this.pickOperation(1)}
            disabled={operator !== 1}
          />
          <Button
            display={'-'}
            onClick={() => this.pickOperation(2)}
            disabled={operator !== 1}
          />
          <Button
            display={'*'}
            onClick={() => this.pickOperation(3)}
            disabled={operator !== 1}
          />
          <Button
            display={'/'}
            onClick={() => this.pickOperation(4)}
            disabled={operator !== 1}
          />
          <Button
            display={'x²'}
            onClick={() => this.pickOperation(5)}
            disabled={operator === 4}
          />
          <Button display={'C'} onClick={() => this.clear()} />
          <Button
            display={'='}
            onClick={() => this.execOperation()}
            disabled={operator === 1}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
