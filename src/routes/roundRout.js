const express = require('express');


const { Question, Topic, Round, sequelize } = require('../../db/models');

const router = express.Router();

/* GET home page. */

router.post('/round', async (req, res) => {
  const { userId, questionId, sucsessCount} = req.body;
   //   console.log(userId, questionId, sucsessCount )
  try {
   const theQuestion = await Question.findOne({id:questionId})

   const theTopic = await Topic.findOne({where: {id:theQuestion.topicId}})

   const questList = await Question.findAll({ where: { topicId:theTopic.id } });
   const allQuest = questList.length;
   console.log(allQuest)

   await Round.create({
     rightAnswersNumber: sucsessCount, userId, questionsNumber: allQuest, topicId:theTopic.id,
   });
   
  }

  catch (error) {
    res.send(`Error -----> ${error}`);
  }
});

module.exports = router;