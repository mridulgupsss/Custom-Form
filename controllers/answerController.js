const answersService = require('../services/answerService');

async function getAnswer(req, res, next) {
  try {
    const { questionId, responseId } = req.params;

    if (!questionId || !responseId) {
      return res.status(400).json({ error: 'Missing questionId or responseId parameter' });
    }

    const answer = await answersService.getAnswer(questionId, responseId);

    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    return res.status(200).json({ answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getAnswer };
