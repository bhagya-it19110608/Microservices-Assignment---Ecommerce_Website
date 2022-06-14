const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController')

/* get all Feedbacks */
router.get('/getFeedbacks',FeedbackController.getFeedbacks);

/* get Feedback details by using id */
router.get('/getFeedback/:id',FeedbackController.getFeedback);

/* add Feedback */
router.post('/addFeedback',FeedbackController.addFeedback);

/* update Feedback details */
router.put('/updateFeedback/:id',FeedbackController.updateFeedback)

/* delete Feedback details */
router.delete('/deleteFeedback/:id',FeedbackController.deleteFeedback);


module.exports = router