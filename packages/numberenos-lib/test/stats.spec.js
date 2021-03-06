// @flow

import { expect } from 'chai';
import { describe, it } from 'mocha';
import jsc from 'jsverify';

import { mean, median, mode, standardDev, variance } from '../lib/stats';

// Near zero is 1x10^(-15) (one quadrillionth)
const aboutZero = () => 0x1656e79eaf03d23c;

describe('Stats module', () => {
    describe('the mean of a set of numbers', () => {
        it('has a sum of zero when deviations of the observations from the mean are added together', () => {
            const sumOfDifferences = function(values, mean) {
                const differences = values.map(n => n - mean);
                return differences.reduce((acc, next) => acc + next, 0);
            };

            jsc.check(jsc.forall('nearray nat', values => {
                return sumOfDifferences(values, mean(values)) <= aboutZero();
            }));
        });

        it('can determine the sum of the samples when multiplied by the size', () => {
            const sum = values => values.reduce((acc, next) => acc + next, 0);

            // first: jsc.check(jsc.forall('[nat]', ...
            // second: jsc.check(jsc.forall(jsc.nearray(jsc.nat())
            // finally:
            jsc.check(jsc.forall('nearray nat', values => {
                const n = values.length;
                return mean(values) * n === sum(values);
            }));
        });

        it('is not a number when no numbers are specificed', () => {
            // expect(mean(undefined)).to.equal(0); // This case is invalid when running flow
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
        jsc.property('is <= at least half of the numbers in the set', 'nearray nat', values => {
            const med = median(values);
            return values.filter(v => v <= med).length >= values.length / 2;
        });

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
        it('never contains more elements than the set itself', () => {
            jsc.check(jsc.forall('nearray nat', v => mode(v).length <= v.length));
        });

        it('is idempotent', () => {
            jsc.check(jsc.forall('nearray nat', v => {
                const mmm = mode(mode(mode(v)));
                const m = mode(v);

                return m.every(x => mmm.includes(x));
            }));
        });

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
        /* Properties we could look at include: (http://stat.tugraz.at/AJS/ausg093/093Al-Saleh.pdf)
         *  - Is zero when all samples are the same
         *  - Minimum and Maximum values of the std deviation
         */
        it('is zero when no values are given', () => {
            expect(standardDev([])).to.equal(0);
        });

        it('is around 2.236 for the set {4, 2, 5, 8, 6}', () => {
            expect(standardDev([4, 2, 5, 8, 6])).to.be.at.least(2.236);
        });

        it('is around 1.581 for the set {1, 2, 3, 4, 5}', () => {
            expect(standardDev([1, 2, 3, 4, 5])).to.be.at.least(1.581);
        });

        it('is exactly zero when all the numbers are the same', () => {
            expect(standardDev([3, 3, 3, 3, 3, 3])).to.equal(0);
            expect(standardDev([3.141929327, 3.141929327, 3.141929327])).to.equal(0);
        });
    });

    describe('the variance of a set of numbers', () => {
        it('is zero when no values are given', () => {
            expect(variance([])).to.equal(0);
        });

        it('is exactly 1 when given the set {1, 2, 3}', () => {
            expect(variance([1, 2, 3])).to.equal(1);
        });

        it('is exactly 6 when given the set {1, 2, 3, 4, 5, 6, 7, 8}', () => {
            expect(variance([1, 2, 3, 4, 5, 6, 7, 8])).to.equal(6);
        });

        it('is around 40.163 when given the set {4, 12, 3.4, 18.121212, 5.4}', () => {
            expect(variance([4, 12, 3.4, 18.121212, 5.4])).to.be.at.least(40.163);
        });

        it('is NaN when given the set {1}', () => {
            expect(variance([1])).to.be.NaN;
        });

        it('is exactly  when all the numbers are the same', () => {
            expect(variance([3, 3, 3, 3, 3, 3])).to.equal(0);
            expect(variance([3.141929327, 3.141929327, 3.141929327])).to.equal(0);
        });
    });
});
