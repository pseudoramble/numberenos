// @flow

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mean } from '../src/stats.js';

describe('Stats module', () => {
    describe('the mean of a set of numbers', () => {
        it('is zero when no numbers are specificed', () => {
            // expect(mean(undefined)).to.equal(0); # This case is invalid when running flow
            expect(mean([])).to.equal(0);
        });

        it('is equal to itself when only a single number is provided', () => {
            expect(mean([1])).to.equal(1);
            expect(mean([2])).to.equal(2);
            expect(mean([1024])).to.equal(1024);
        });

        it('is equal to 4 when the set of numbers is [3,4,5]', () => {
            expect(mean([3, 4, 5])).to.equal(4);
        });

        it('is equal to 4.5 when the set of numbers is [3,4,5,6]', () => {
            expect(mean([3, 4, 5, 6])).to.equal(4.5);
        });
    });
});
