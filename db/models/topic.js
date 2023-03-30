'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      this.hasMany(models.Question, { foreignKey: 'topicId' });
      this.hasMany(models.Round, { foreignKey: 'topicId' });
    }
  }
  Topic.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};