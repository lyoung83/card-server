const { constants } = require('../helpers');
const { users } = require('../model-contexts');

module.exports = ({ method, params, query, body }, res) => {
    const { handleGet, create, update, deleteUser } = users;
    const { get, post, put, delete: deleteMethod} = constants;

    switch (method) {
        case get:
            // Show / Index
            return handleGet(params.id, res);
        case post:
            //Create
            return create(body, res);
        case put:
            //Update
            return update(params.id, res);
        case deleteMethod:
            //Delete
            return deleteUser(params.id, res)
        default:
            return res.status(404).json({ error: "Invalid Route" });
    }

};
