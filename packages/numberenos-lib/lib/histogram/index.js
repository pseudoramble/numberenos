// @flow

import { countBy } from 'lodash';

const histogram = (values: number[]) => countBy(values);

export default histogram;