## ![ram-cityworks](http://i.imgur.com/9pBZCJP.png) &nbsp; [![Build Status](https://travis-ci.org/kdclaw3/ram-cityworks.svg?branch=v0.1.0)](https://travis-ci.org/kdclaw3/ram-cityworks) &nbsp; [![npm version](https://badge.fury.io/js/ram-cityworks.svg)](https://badge.fury.io/js/ram-cityworks)


### About

This module checks the input password against a user's password stored in the Cityworks database. **Why?/Rant** As of Cityworks 2015R2 Cityworks stores a SIMPLE MD5 hash of the password in the [PASSWORD] column in the [AZTECA.USERS] table. Correct, no modern day encryption techniques used. Enterprise exposing Cityworks outside the network should be very leery. This module et al. was used to enforce strong passwords inside Cityworks by expiring Cityworks users with simple passwords.

### Installation

```sh
$ npm install ram-cityworks
```

### Usage

```js
var ram = require('ram-cityworks');

//.match(<CITYWORKS PASSWORD>,<INPUT PASSWORD>)
var matches = ram.match('5F4DCC3B5AA765D61D8327DEB882CF99','password');
console.log('The input matches the Cityworks password: ' + matches + '.');

var matches = ram.match('5F4DCC3B5AA765D61D8327DEB882CF99','incorrect_password');
console.log('The input matches the Cityworks  password: ' + matches + '.');
```

### License

MIT &copy; 2016 Dee Clawson.
