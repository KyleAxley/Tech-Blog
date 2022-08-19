const router = require('express').Router();
const { User, Comment, Post} = require('../../models');

//CRUD, create(post), recieve(get), update(put), delete(delete).

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.post('/login', (req, res) => {

});

router.post('/logout', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//route to delete user by id
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        //checks to see if actual user exsists
        if(!dbUserData) {
            res.status(404).json({ message: 'There was no user found by this id!'})
            return;
        } 
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router; 
