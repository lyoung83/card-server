'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    power: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    hitPoints: DataTypes.INTEGER
  }, {});
  Card.associate = function (models) {
    // associations can be defined here
    Card.belongsTo(models.User)
  };
  return Card;
};