const express = require('express');
const renderTemplate = require('../../lib/renderReactModule');
const { Topic, Question } = require('../../db/models');
const Topics = require('../../views/Topic');

const router = express.Router();

router.get('/topic/:userId', async (req, res) => {
  try {
    await Question.update(
      { status: false },
  {
      where: {
      status: true,
    },
  }
    );
    const { userId } = req.params;
    const topics = await Topic.findAll({ raw: true });
    renderTemplate(Topics, { topics, userId }, res);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
