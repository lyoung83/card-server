const user = require('../../models').User
const { messages } = require('../helpers');
const {returnError, notFoundError, handleGetRequest, nullCheck} = messages;

const index = async (res) => {
    try {
        let users = await user.findAll();
        return res.json(users);
    } catch (error) {
        return returnError(res);
    }
},

show = async (id, res) => {
    try {
        let u = await user.findByPk(id);
        nullCheck(u);
        return res.json(u);
    } catch (error) {
        return notFoundError(res);
    }
},

create = async (body, res) => {
    let query = {
        where: { email: body.email },
        defaults: body
    }

    try {
        let u = await user.findOrCreate(query);
        return res.json(u[0]);
    } catch (error) {
        return returnError(res)
    };
},

update = async (id, res) => {
    try {
        let u = await user.findByPk(id)
        nullCheck(u)
        let result = await u.update(body, { fields: ['firstName', 'lastName'] });
        return res.json(result);
    } catch (error) {
        return notFoundError(res);
    }
},

deleteUser = async (id, res) => {
    try {
        let u = await user.findByPk(id)
        nullCheck(u);
        u.destroy();
        return messages.successMessage(res, "Record Deleted");
    } catch (error) {
        return notFoundError(res);
    }
},

handleGet = (id, res) => {
    return handleGetRequest(!!id, () => show(id, res), () => index(res));
}


module.exports = {
    create,
    update,
    deleteUser,
    handleGet
}