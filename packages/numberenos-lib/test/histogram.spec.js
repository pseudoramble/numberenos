// @flow

import { expect } from 'chai';
import { describe, it } from 'mocha';
import histogram from '../lib/histogram';

describe('Histogram module', () => {
    it('is an empty set when no numbers are provided', () => {
        expect(histogram([])).to.be.eql({});
    });

    it('Counts unique values only once', () => {
        expect(histogram([3.14, 4.4, 4.0, 4.2, 3.1])).to.eql({
            3.14: 1,
            4.4: 1,
            4.0: 1,
            4.2: 1,
            3.1: 1
        })
    });

    it('Counts the same value the amount of times it appears', () => {
        expect(histogram([3.14, 3.14, 3.14, 3.14])).to.eql({ 3.14: 4});
    });

    it('Counts repeating values expectedly', () => {
        expect(histogram([3, 2, 2, 3, 3, 2, 1, 2, 3])).to.eql({
            1: 1,
            2: 4,
            3: 4
        });
    });
});