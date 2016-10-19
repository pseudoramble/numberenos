// @flow
import React from 'react';
import { histogram } from 'numberenos';
import { times, map } from 'lodash';

import Block from './Block.jsx';

type Data = {
  values: number[]
}

const histogramStyles = {
  "display": "flex",
  "justifyContent": "space-around",
  "direction": "column",
  "alignItems": "flex-end"
};

const makeStacks = (key, height, symbol = '•') => 
  map(times(height, () => symbol), (_, i) => <Block key={`${i}-${key}-${height}`} color={"blue"} size={20} />);

const Histogram = ({ values }: Data) => {
  const groupedData = histogram(values);

  return ( 
    <div>
      <div style={histogramStyles}>
        {map(groupedData, (amount, key) => 
          <span key={key}>
            {makeStacks(key, amount)}
            <div style={{"paddingRight": "10px"}}>{key}</div>
          </span>
        )}
      </div>
    </div>
  );
};

export default Histogram;