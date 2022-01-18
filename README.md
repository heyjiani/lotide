# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @heyjiani/lotide`

**Require it:**

`const _ = require('@heyjiani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: compare two arrays for a perfect match and prints out assertion result. 
* `assertEqual()`: compares two values for a perfect match and prints out assertion result.
* `assertObjectsEqual()`: compare two objects for a perfect match and prints out assertion result.
* `countLetters()`: takes in a string and returns a count of each of the letters in the string.
* `countOnly()`: takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays()`: compares two arrays for a perfect match.
* `eqObjects()`: compares two objects for a perfect match.
* `findKey()`: scans an object and returns first key for which callback returns a truthy value.
* `findKeyByValue()`: finds the first key in an object which contains a given value.
* `flatten()`: returns a 'flattened' version of given array.
* `head()`: returns the first item in an array.
* `letterPositions()`: takes in a string and returns all indices in the string of each character.
* `map()`: returns a new array based on results of callback. 
* `middle()`: returns middle-most element(s) of given array.
* `tail()`: returns the tail of an array (everything except for the first item).
* `takeUntil()`: collects items from an array until callback returns a truthy value.
* `without()`: returns a subset of given array after removing unwanted elements. 


