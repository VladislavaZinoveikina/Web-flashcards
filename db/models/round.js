'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Guess, { foreignKey: 'roundId' });
      this.belongsTo(models.Topic, { foreignKey: 'topicId' });
    }
  }
  Round.init({
    rightAnswersNumber: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    questionsNumber: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};