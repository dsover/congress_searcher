'use strict';

let config = require('../config.js'),
    request = require('request');

class SunlightCaller {
     
    constructor(method, query) {
        this.config = config;
        this.sunlightUrl = config.get('sunlight_api_url');
        this.method = method;
        this.query = query;
    }

    // set method(method) {
    //     this.method = null || method;
    // }

    // set query(query) {
    //     this.query = null || query;
    // }
    
    call() {
        return new Promise((resolve, reject) => {
            const url = `${this.sunlightUrl}${this.method}?${this.query}`;
            request(url, (err, res) => {
                if (err) {
                    reject(`ERROR in gbs-data-retriever: URL=${url} | ERR=${err}`);
                }
                let data = JSON.parse(res.body);
                resolve(data);
            });       
        });
    }
}

module.exports = SunlightCaller;
