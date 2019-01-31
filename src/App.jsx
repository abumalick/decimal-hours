import React, { Component } from 'react';
import css from '@emotion/css/macro';
import { Global } from '@emotion/core';
import styled from '@emotion/styled/macro';

const GlobalCSS = css`
  html,
  body {
    font-size: 16px;
  }
`;

const SApp = styled.div`
  padding: 50px 50px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  & input {
    margin-left: 10px;
    font-size: 16px;
  }
`;

const Button = styled.button`
  font-size: 16px;
`;

const inputs = ['hours', 'minutes', 'seconds'];
const initialState = inputs.reduce((sum, input) => {
  sum[input] = 0;
  return sum;
}, {});

class App extends Component {
  state = initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: parseInt(value, 10),
    });
  };

  handleReset = () => {
    this.setState(initialState);
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    const decimalHours =
      (hours || 0) + (minutes || 0) / 60 + (seconds || 0) / 3600;
    return (
      <SApp>
        <Global styles={GlobalCSS} />
        <h1>Convert your time to decimal hours</h1>
        {inputs.map((input) => {
          return (
            <Label key={input}>
              {input}:
              <input name={input} onChange={this.handleChange} type="number" />
            </Label>
          );
        })}
        <h2>Result</h2>
        <p>{decimalHours}</p>
        <Button onClick={this.handleReset}>Reset</Button>
      </SApp>
    );
  }
}

export default App;
