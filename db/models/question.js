'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.belongsTo(models.Topic, { foreignKey: 'topicId' });
      this.hasMany(models.Guess, { foreignKey: 'questionId' });
    }
  }
  Question.init({
    text: DataTypes.STRING,
    rightAnswer: DataTypes.TEXT,
    topicId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};