const Answer = require('../models/answer-model');

async function getAnswer(questionId, responseId) {
  try {
    const answer = await Answer.findOne({ question_id: questionId, response_id: responseId });
    
    if (!answer) {
      return null; // answer not found
    }

    return {
      answer_id: answer._id,
      text: answer.text,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = { getAnswer };
