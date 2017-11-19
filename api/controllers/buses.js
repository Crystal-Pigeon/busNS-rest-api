/**
 * Created by Aleksandar Babic on 19.11.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

const mongoose = require('mongoose');
const Bus = require('../model/bus');
const busesController = require('../controllers/buses');

/**
 * GET /buses route to retrieve all the buses.
 * @param req
 * @param res
 */
function getBuses(req, res) {
    const query = Bus.find({})
        .then(buses => res.status(200).send(buses))
        .catch(err => res.status(500).send(err));
}

/**
 * GET /buses/:id route to retrieve a bus schedule given its id.
 * @param req
 * @param res
 */
function getBus(req, res) {
   Bus.findOne({id: req.params.id})
       .then(bus => res.status(200).send(bus))
       .catch(err => res.status(500).send(err));
}

module.exports = { getBuses, getBus };