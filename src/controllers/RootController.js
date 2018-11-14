const methods = require('../helpers/Constants')

module.exports = (_, res) => {
    const error = "Invalid Operation: You are visiting an unspecified route, please submit a new request"
    res.status(500)
    res.json({ error })

}