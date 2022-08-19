const router = require('express').Router();
const { Comment } = require('../../models/Comment');

router.get('/', (req,  res) => {

});

router.post('/', (req, res) => {

});

//route to delete comment by id
router.delete('/:id', (req, res) => {
    Comment.destroy ({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        // checks to see if actual comment exists. 
        if(!dbCommentData) {
            res.status(404).json({ message: 'There was no comment found by this id!'})
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;