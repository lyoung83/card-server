const card = require('../../models').Card;
const { messages, data } = require('../helpers');
const { returnError, notFoundError, handleGetRequest, nullCheck } = messages;
const { getRandomInt, getRandomName} = data;



const create = async (UserId, res) => {
    try {
        let result = await card.create({
            name: getRandomName(),
            power: getRandomInt(2, 10),
            damage: getRandomInt(5, 15),
            hitPoints: getRandomInt(10, 20),
            UserId
        });

        return res.json(result)
    } catch (error) {
        console.log(error);
        return returnError(res);
    }

},

    index = async (UserId, res) => {
        try {
            let result = await card.findAll({ where: { UserId } });
            return res.json(result);
        } catch (error) {
            console.log(error);
            return returnError(res);
        }

    },

    show = async (id, res) => {
        try {
            let result = await card.findByPk(id);
            nullCheck(result);
            return res.json(result);
        } catch (error) {
            return notFoundError(res);
        }
    },

    handleGet = (userId, id, res) => {
        return handleGetRequest(!!userId && !!id, () => show(id, res), () => index(userId, res))
    }

module.exports = {
    getRandomName,
    create,
    handleGet
}