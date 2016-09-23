Hi Diddle-Ho, Numberenos!
============================

![Ned Flanders](http://images5.fanpop.com/image/photos/30700000/Ned-Flanders-ned-flanders-30746051-284-319.jpg)

What is this?
----------------------------

This is a tiny project that provides some of the most basic statistical functions one might want. 

Features include:

* Mean
* Median
* Mode
* Sample Standard Deviation
* Variance

There are a small set of tests to examine the behavior of these functions.

To use the tools
-----------------------------

Import the `src/stats` module, and include any of the functions you may want.
Each function currently accpets a `number[]`. So gather the numbers you want to look at
and give it a run!

    import { mean, mode } from './src/stats';
    mean([1, 2, 3]);         // number[] -> number (2 in this case)
    mode([2, 2, 4, 4, 5, 6]) // number[] -> number[] ([2, 4] in this case)

See `tests/stats.spec.js` for some more examples.

To edit the code
-----------------------------
You'll need to make sure to install Node first.

To get started, clone this repo and do `npm install`. You should then have all of the
basic tools needed to type check your code, and write in an ES6 fashion. 

Typecheck this code
------------------------------
The objective of this project was to play around with [Flowtype](https://flowtype.org/).
This project includes the basic tools needed for that.

If you have an editor that supports Flow type checking, you should be able to see type
checks running immediately. If not, you can use `npm run validate` to do a check of the
types.

Testing this code
--------------------------------
It's recommended that you create new tests or update existing ones. This project uses
mocha + chaijs for testing. These tests can be run via `npm run test`.