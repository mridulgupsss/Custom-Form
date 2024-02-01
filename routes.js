const router = require('express').Router();
const formController = require('./controllers/formController');
const questionController = require('./controllers/questionController');
const answerController = require('./controllers/answerController');
const responseController = require('./controllers/responseController');


// forms routes
router.post('/createForm', formController.createForm);
router.get('/getQuestions/:form_id', questionController.getQuestions);
router.post('/createResponse', responseController.createResponse);
router.get('/getAnswer/:questionId/:responseId', answerController.getAnswer);
router.get('/getAllResponses/:formId', responseController.getAllResponses);


module.exports = router;
