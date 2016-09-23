// @flow

import { countBy, invertBy, isNaN, isSafeInteger, map, reduce, sortBy, sum, toSafeInteger } from 'lodash';

const toNumber = (value: string): number => {
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue) && isSafeInteger(parsedValue)) {
        return toSafeInteger(parsedValue);
    } else if (!isNaN(parsedValue) && !isSafeInteger(parsedValue)) {
        return parsedValue;
    }

    throw new Error('the value given (which was ' + value + ') is not a number at all!');
}

const toMaxNumber = (result, value, key) => Math.max(result, toNumber(key));

export const mean = (values: number[]): number =>
    sum(values) / values.length;

export const median = (values: number[]): number => {
    const sorted = sortBy(values);

    if (sorted.length > 0 && sorted.length % 2 !== 0) {
        return sorted[Math.floor(sorted.length / 2)];
    } else if (sorted.length > 0 && sorted.length % 2 === 0) {
        const midIndex = Math.floor(sorted.length / 2);
        const lower = sorted[midIndex - 1];
        const upper = sorted[midIndex];

        return (upper + lower) / 2;
    }

    return NaN;
}

export const mode = (values: number[]): number[] => {
    const tallyTable = invertBy(countBy(values));
    const maxValue = reduce(tallyTable, toMaxNumber, Number.NEGATIVE_INFINITY);

    const result = map(tallyTable[maxValue], toNumber);
    return result;
}

export const standardDev = (values: number[]): number =>
    0

export const variance = (values: number[]): number =>
    0
