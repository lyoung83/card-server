const names = require('./names.json');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomName = () => {
    return names[Math.floor(Math.random() * names.length)]['name']
}

module.exports = {
    getRandomInt,
    getRandomName
}