const express = require('express');
const renderTemplate = require('../../lib/renderReactModule');
const Static = require('../../views/Static');
const { Round, User, Topic } = require('../../db/models');

const router = express.Router();

router.get('/static/:userId', async (req, res) => {
  const { userId } = req.params;
  try{
  const reports = await Round.findAll({ where: { userId},
    include: [{
      model: User,
    },
    {
      model: Topic,
    }],
    raw: true,
  });

  console.log(reports);
  renderTemplate(Static, { reports }, res);
}
catch(err){
  res.send(err)
}
});

module.exports = router;
