const returnError = res => res.status(422).json({error: 'Operation Error'}),

notFoundError = res => res.status(404).json({error: 'Not Found'}),

successMessage = (res, message) => res.json({success: message}),

nullCheck = (resource) => { if (!resource) {throw Error}; },

placeholderFunction = () => {}

handleGetRequest = (param = false, success = placeholderFunction, fallback = placeholderFunction) => {
    console.log(param)
    return param ? success() : fallback();
};

module.exports = {
     returnError,
     notFoundError,
     successMessage,
     nullCheck,
     handleGetRequest
}