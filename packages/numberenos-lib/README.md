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
* Histogram
    * This does not generate the actual visual, but rather a formatted data set to use

A small set of tests exists to examine the behavior of these functions.

To use the tools
-----------------------------

1. Run a build. This will create a module for you to use.

        npm run compile # or npm run build if you've run Flow already

2. All packages are provided at the toplevel. So all functions can be importe like so:

        import { mean, mode } from 'numberenos';

        mean([1, 2, 3]);         // number[] -> number (2 in this case)
        mode([2, 2, 4, 4, 5, 6]) // number[] -> number[] ([2, 4] in this case)


To edit the code
-----------------------------

You'll need to make sure to install Node first to get started. Clone this repo and
do `npm install`. You should then have all of the basic tools needed to type check your code,
and write in with more modern JS (ES6+).

Each function accpets a `number[]`. Generally either a `number` or `number[]` is returned.
In some instances, a grouping represented by a keyed object is returned.

To add or modify functions which are part of this package, update and add new tests for Each
function touched. Also ensure that code is properly run through Flow.
See `tests/stats.spec.js` for some more examples.

Testing this code
--------------------------------

This project uses mocha + chaijs for testing. These tests can be run via `npm run test`.

When adding new functions or modifying existing ones, please create or modify tests accordingly.

Typecheck this code
------------------------------

The objective of this project was to play around with [Flowtype](https://flowtype.org/).
This project includes the basic tools needed for that.

If you have an editor that supports Flow type checking, you should be able to see type
checks running immediately. If not, you can use `npm run validate` to do a check of the
types.
