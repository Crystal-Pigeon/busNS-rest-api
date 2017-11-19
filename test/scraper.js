/**
 * Created by Aleksandar Babic on 19.11.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */
process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const chai = require('chai');
const server = require('../server');
const should = chai.should();
const assert = chai.assert;

const utilsScraper = require('../api/utils/gspnsScraper');
const utilsBuildUrl = require('../api/utils/gspnsBuildUrl');

let countCity,countNonCity;


describe('Scraper', () => {
    "use strict";
    it('it should return all city bus lanes on work days', (done) => {
        utilsScraper.scrapeLineCity('R').then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(15);
            countCity = lanes.length;
            done();
        })
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all city bus lanes on saturday', (done) => {
        utilsScraper.scrapeLineCity('S').then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(15);
            done();
        })
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all city bus lanes on sunday', (done) => {
        utilsScraper.scrapeLineCity('N').then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(15);
            done();
        })
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all city bus lanes when no day is specified', (done) => {
        utilsScraper.scrapeLineCity().then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(15);
            lanes.should.have.lengthOf(countCity);
            done();
        })
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all non city bus lanes on work days', (done) => {
        utilsScraper.scrapeLineNonCity('R').then(lanes => {
            countNonCity = lanes.length;
            lanes.should.be.a('array').that.have.lengthOf.at.least(25);
            done();
        })
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all non city bus lanes on saturday', (done) => {
        utilsScraper.scrapeLineNonCity('S').then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(25);
            done();
        })
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all non city bus lanes on sunday', (done) => {
        utilsScraper.scrapeLineNonCity('N').then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(25);
            done();
        });
    });
});

describe('Scraper', () => {
    "use strict";
    it('it should return all non city bus lanes when no day is specified', (done) => {
        utilsScraper.scrapeLineNonCity().then(lanes => {
            lanes.should.be.a('array').that.have.lengthOf.at.least(25);
            lanes.should.have.lengthOf(countNonCity);
            done();
        })
    });
});