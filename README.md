# UltimateBabysitting API

UltimateBabysitting API is an open-source API to help find babysitters or advertise your babysitting services.

<!-- Badges -->
[![Known Vulnerabilities](https://snyk.io/test/github/Ultimatebabysitter/ultimatebabysitter-api/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Ultimatebabysitter/ultimatebabysitter-api?targetFile=package.json)
[![Build Status](https://travis-ci.org/Ultimatebabysitter/ultimatebabysitter-api.svg?branch=master)](https://travis-ci.org/Ultimatebabysitter/ultimatebabysitter-api)
<span class="badge-paypal"><a href="https://paypal.me/ultimatebabysitting" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

## Features
* User management/authentication
* External file hosting
* SMS/Phone authentication
* Babysitter search by distance
* Rating system
* User activity monitoring

## Installation
1. Clone the repository locally.
2. Run `npm install`
3. Run `npm start`
4. Go to http://127.0.0.1:3000/users

## Requirements
1. MongoDB running on your local machine. https://docs.mongodb.com/manual/installation/
2. AWS S3 to store files
3. Twilio for user phone authentication


### MIT License

Copyright (c) 2018 ultimatebabysitting.com - https://github.com/Ultimatebabysitter/ultimatebabysitter-api

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software. The above copyright notice shall
be displayed prominently on each and every page or view of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
