const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");
router.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", (req, res) => {
    burger.create(req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});
router.put("/api/burgers/:id", (req, res) => {
    var id = req.params.id;
    burger.update(id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;