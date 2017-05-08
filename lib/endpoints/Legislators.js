'use strict';

let SunlightCaller = require('../sunlight_caller.js');

class Legislators extends SunlightCaller {
     
    constructor(query) {
        super('legislators', query);
        this.query = query;
    }

    setQuery(query) {
        this.query = query;
        return this;
    }
    locate() {
        this.method = 'legislators/locate';
        return this;
    }

}

module.exports = Legislators;
