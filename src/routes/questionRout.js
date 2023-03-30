/* eslint-disable max-len */
const express = require('express');
const renderTemplate = require('../../lib/renderReactModule');
const quest = require('../../views/Question');
const { Question, Topic, Round } = require('../../db/models');
const End = require('../../views/End');

const router = express.Router();

router.get('/:userId/:topicId', async (req, res) => {
  try {
    const { userId, topicId } = req.params;
    const questions = await Question.findAll({ where: { topicId, status: false }, raw: true });
    if (questions) {
      const topic = await Topic.findOne({ where: { id: topicId }, raw: true });
      const allQuest1 = await Question.findAll({ where: { topicId }, raw: true });
      const allQuest = allQuest1.length;
      renderTemplate(quest, {
        userId, questions, topic, allQuest,
      }, res);
    } else {
      const questList = await Question.findAll({ where: { topicId } });
      const allQuest = questList.length;
      renderTemplate(End, null, res);
    }
  } catch (error) {
    console.log('BeELZEBUB FROM HELL=======>', error);
  }
});

router.post('/question', async (req, res) => {
  try {
    const {
      givenTry, questionId, userId, sucsessCount,
    } = req.body;

    const questionStatustoChange = await Question.findOne({ where: { id: questionId } });
    const { topicId, rightAnswer } = questionStatustoChange;
    await questionStatustoChange.update({ status: true });

    const nextQuestions = await Question.findAll({ where: { topicId, status: false }, raw: true });
    const nextQuestion = nextQuestions.pop();

    if (nextQuestions === null) {
    } else {
      const topic = await Topic.findOne({ where: { id: topicId } });
      const obj = {
        nextQuestion, topic, rightAnswer,
      };
      res.status(200).json(obj);
    }
  } catch (error) {
    console.log('SASASASASASASAS=======>', error);
  }
});

module.exports = router;

// const topic = await Topic.findOne({ where: { id: topicId } });
//     const obj = {
//       nextQuestion, topic, rightAnswer,
//     };
//     res.status(200).json(obj);
