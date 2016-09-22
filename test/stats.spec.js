// @flow

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mean, median, mode, standardDev, variance } from '../src/stats.js';

describe('Stats module', () => {
    describe('the mean of a set of numbers', () => {
        it('is not a number when no numbers are specificed', () => {
            // expect(mean(undefined)).to.equal(0); # This case is invalid when running flow
            expect(mean([])).to.be.NaN;
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

    describe('the median of a set of numbers', () => {
        it('is NaN when no numbers are specified', () => {
            expect(median([])).to.be.NaN;
        });

        it('is the first number when a list of size 1 is given', () => {
            expect(median([15])).to.equal(15);
        });

        it('is the second number when a list of size 3 is given', () => {
            expect(median([3, 6, 1024])).to.equal(6);
        });

        it('is between the 1st and 2nd number when a list of size 2 is given', () => {
            expect(median([2, 4])).to.equal(3);
        });

        it('is still the midpoint of numbers regardless of order', () => {
            expect(median([1024, 12, 144444, 13, 1924, 169, 4])).to.equal(169);
        });
    });

    describe('the mode of a set of numbers', () => {
        it('is an empty set when no values are given', () => {
            expect(mode([])).to.eql([]);
        });

        it('contains only 5 when it is the most frequent numbers', () => {
            const result = mode([5, 1, 4, 2, 5, 2, 5]);

            expect(result).to.have.lengthOf(1);
            expect(result).to.have.all.members([5]);
        });

        it('contains both 5, 10, and 1 when they are the most frequent numbers', () => {
            const result = mode([1, 5, 10, 5, 2, 3, 10, 1, 4, 15])

            expect(result).to.have.lengthOf(3);
            expect(result).to.have.all.members([5, 10, 1]);
        });
    });

    describe('the standard deviation of a set of numbers', () => {

    });

    describe('the variance of a set of numbers', () => {

    });
});
