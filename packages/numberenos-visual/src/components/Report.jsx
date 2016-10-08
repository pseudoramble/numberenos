// @flow
import React, { PropTypes } from 'react';

const Report = ({ mean, median, mode, variance, stdDev }: { mean: number, median: number, mode: number[], variance: number, stdDev: number }) => 
  <div>
    <h3>Report</h3>
    <div>Mean: {mean}</div>
    <div>Median: {median}</div>
    <div>Mode: {mode}</div>
    <div>Standard Deviation: {stdDev}</div>
    <div>Variance: {variance}</div>
  </div>;

Report.propTypes = {
  mean: PropTypes.number.isRequired,
  median: PropTypes.number.isRequired,
  mode: PropTypes.arrayOf(PropTypes.number).isRequired,
  variance: PropTypes.number.isRequired,
  stdDev: PropTypes.number.isRequired
}

export default Report;