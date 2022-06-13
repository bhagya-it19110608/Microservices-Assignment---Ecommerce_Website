const Feedback = require('../models/FeedbackModel')

/* get all Feedbacks ( GET )*/
exports.getFeedbacks = async(req,res) =>{
    const fed = await Feedback.find()

    if(!fed){
        res.status(401).json({
            success: false,
            message: 'get all Feedback details unsuccessful'
        })
    }

    res.status(200).json({
        success: true,
        fed
    })
}

/* get Feedback By Id ( GET )*/
exports.getFeedback = async(req,res) =>{
    const fed = await Feedback.findById(req.params.id)

    if(!fed){
        res.status(401).json({
            success: false,
            message: 'get Feedback unsuccessful'
        })
    }

    res.status(200).json({
        success: true,
        fed
    })
}

/*add Feedback ( POST ) */
exports.addFeedback= async(req,res) =>{
    const fed = await Feedback.create(req.body)

    if(!fed){
        res.status(401).json({
            success: false,
            message: 'Insert Feedback Unsuccesfull'
        })
    }

    res.status(200).json({
        success: true,
        message: 'Feedback inserted successfully',
        fed
    })
}

/* delete Feedback ( DELETE ) */
exports.deleteFeedback = async (req,res) =>{
    const fed = await Feedback.findByIdAndDelete(req.params.id)

    if(!fed){
        res.status(401).json({
            success: false,
            message: 'delete Feedback unsuccessful'
        })
    }

    res.status(200).json({
        success: true,
        fed
    })
}

/* update Feedback ( PUT ) */
exports.updateFeedback = async (req, res) => {

    let fed = await Feedback.findById(req.params.id);

    if (!fed) {
        return res.status(404).json({
            success: false,
            message: 'Feedback Not Found'
        })
    }

    fed = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        fed
    })
}
