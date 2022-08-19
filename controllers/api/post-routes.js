const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Comment, User } = require('../../models');


router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//route to delete post by id
router.delete('/:id', (req, res) => {
    Post.detroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        //checks to see if actual post exists. 
        if(!dbPostData){
            res.status(404).json({ message: 'There is no post found by this id!'})
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
