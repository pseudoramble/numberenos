// @flow
import React from 'react';
import { histogram } from 'numberenos';
import { times, map } from 'lodash';

type Data = {
  values: number[]
}

const histogramStyles = {
  "display": "flex",
  "justify-content": "space-around",
  "direction": "column",
  "align-items": "flex-end"
};

const makeStacks = (height, symbol = '•') => 
  map(times(height, () => symbol), n => <div>{n}</div>);

const Histogram = ({ values }: Data) => {
  const groupedData = histogram(values);

  return ( 
    <div>
      <h3>Histogram</h3>
      <div style={histogramStyles}>
        {map(groupedData, (amount, key) => 
          <span key={key}>
            {makeStacks(amount)}
            <div style={{"padding-right": "10px"}}>{key}</div>
          </span>
        )}
      </div>
    </div>
  );
};

export default Histogram;