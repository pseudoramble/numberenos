// @flow
import React, { PropTypes } from 'react';
import Report from './Report.jsx';
import report from 'numberenos';

type AppConfig = {
  title: string,
  values: number[]
};

const App = ({ title = 'Numberenos', values = [67, 63, 63, 69, 69, 45] }: AppConfig) =>
  <div>
    <h1>{title} App</h1>
    <p>Temperature Highs for the week: {JSON.stringify(values)}</p>
    <Report {...report(values)} />
  </div>

App.propTypes = {
  title: PropTypes.string
}

export default App;