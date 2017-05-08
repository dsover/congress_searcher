'use strict';

const legs = require('./lib/endpoints/legislators.js');


let l = new legs();

l.setQuery('?zip=30022')
    .locate().call()
    .then((data) => {
        console.log(data);
    });

