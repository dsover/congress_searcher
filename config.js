'use strict';

let environment;
const nconf = require('nconf'),
    pkg = require('./package.json'),
    config = {
        default: {
            name: pkg.name,
            sunlight_api_url: 'https://congress.api.sunlightfoundation.com/'
        }
    };

// whitelist environment variables
nconf.env([
    'ENVIRONMENT',
    'PORT'
]);

environment = nconf.get('ENVIRONMENT');
    

switch (environment.toLowerCase()) {
    case 'prod':
        nconf.defaults(config.prod);
        break;

    default:
        nconf.defaults(config.ref);
}

nconf.overrides(config.default);
module.exports = nconf;

