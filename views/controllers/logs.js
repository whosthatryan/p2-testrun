const express = require('express');
const router = express.Router();
const Logs = require('../models/logs.js');

//INDEX
router.get('/', (req, res) => {
    Logs.find({}, (error, allLogs) => {
        res.render('logs/Index', {
            logs: allLogs
        })
    });
});

// New
router.get('/new', (req, res) => {
    res.render('logs/New');
});

// Delete
router.delete('/:id', (req, res) => {
    Logs.findByIdAndRemove({_id: req.params.id}, (err, logs) => {
        console.log(logs)
        res.redirect('/logs');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
    Logs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/logs');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Logs.create(req.body, (error, createdLogs) => {
        res.redirect('/logs');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        res.render('logs/Edit', {
            log: foundLog
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    Logs.findById(req.params.id, (error, foundLog) => {
        res.render('logs/Show', {
            log: foundLog
        });
    });
});

module.exports = router;