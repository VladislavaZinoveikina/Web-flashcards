'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guess extends Model {
    static associate(models) {
      this.belongsTo(models.Round, { foreignKey: 'roundId' });
      this.belongsTo(models.Question, { foreignKey: 'questionId' });
    }
  }
  Guess.init({
    roundId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guess',
  });
  return Guess;
};