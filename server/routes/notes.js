var express = require('express');
var router = express.Router();
const Note = require('./../models/notes')

router.post('/', (req, res, next)=>{
    console.log('heyyyy')
    const note = new Note({
        content: req.body.content, 
        created_by: req.body.created_by
      });

      note.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

    console.log(req.body)
})

router.get('/', (req, res, next)=>{
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
})

module.exports = router;