const express = require('express');
const router = express.Router();
const Crewmember = require('../models/crewmembers.js');

//INDEX
router.get('/', (req, res) => {
    Crewmember.find({}, (error, allCrewmembers) => {
        res.render('crewmembers/Index', {
            crewmember: allCrewmembers
        })
    });
});

// New
router.get('/new', (req, res) => {
    res.render('crewmembers/New');
});

// Delete
router.delete('/:id', (req, res) => {
    Crewmember.findByIdAndRemove({_id: req.params.id}, (err, crewmember) => {
        console.log(crewmember)
        res.redirect('/crewmembers');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    req.body.engineeringAccess = req.body.engineeringAccess === "on" ? true : false;
    Crewmember.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/crewmembers');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.engineeringAccess === "on") {
        req.body.engineeringAccess = true;
    } else {
        req.body.engineeringAccess = false;
    }
    Crewmember.create(req.body, (error, createdCrewmember) => {
        res.redirect('/crewmembers');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    Crewmember.findById(req.params.id, (err, foundCrew) => {
        res.render('crewmembers/Edit', {
            crewmembers: foundCrew
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    Crewmember.findById(req.params.id, (error, foundCrew) => {
        res.render('crewmembers/Show', {
            crewmember: foundCrew
        });
    });
});

module.exports = router;