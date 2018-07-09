'use strict';

//Dependencies
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('pages/index');
});

router.post('/', (req, res) => {
	//Making sure once again that the input values are not empty
	if (req.body.sideA != '' && req.body.sideB!= '' && req.body.sideB != '') {
		getTriangleType(req.body.sideA, req.body.sideB, req.body.sideC, (err, result) => {
			if (err) {
				console.log(err);
				return;
			} else {
				//Sending result to be displayed
				res.send(`Result: ${result} triangle`);
			}
		});
	}
});

function getTriangleType(sideA, sideB, sideC, callback) {
	if (sideA != sideB && sideB != sideC && sideC != sideA) {
		callback(null, 'scalene');
	} else if (sideA == sideB && sideB == sideC && sideC == sideA ) {
		callback(null, 'equilateral');
	} else {
		callback(null, 'isosceles ');
	}
}

module.exports = router;