// @flow
import React, { PropTypes } from 'react';
import { report } from 'numberenos';

import Report from './Report.jsx';
import Histogram from './Histogram.jsx';

type AppConfig = {
  title: string,
  values: number[]
};

const App = ({ title = 'Numberenos', values = [67, 50, 51, 63, 45, 69, 63, 45, 69, 69, 45, 45, 45] }: AppConfig) =>
  <div>
    <h1>{title} App</h1>
    <p>Temperature Highs for the week: {JSON.stringify(values)}</p>
    <Report {...report(values)} />
    <h3>Histogram</h3>
    <Histogram values={values} />
  </div>

App.propTypes = {
  title: PropTypes.string
}

export default App;