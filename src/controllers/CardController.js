const { constants } = require('../helpers');
const { cards } = require('../model-contexts');

module.exports = ({ method, params, query, body }, res) => {
    const { handleGet, create, update } = cards;
    const { get, post, put } = constants;

    switch (method) {
        case get:
            // Show / Index
            return handleGet(params.userId, params.id, res);
        case post:
            //Create
            return create(params.userId, res);
        case put:
            //Update
            return update(params.userId, res);
        default:
            return res.status(404).json({ error: "Invalid Route" });
    }

};
