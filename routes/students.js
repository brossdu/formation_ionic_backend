var express = require('express');
var router = express.Router();

var studentsJSON = require('../data/students.json');

/* GET students listing. */
router.get('/', function(req, res, next) {
	console.log(req);
	console.log(res);

  res.send(studentsJSON);
});

/*GET one specifi student */
router.get('/:studentID', function(req, res, next) {
	let studentID = req.params.studentID;
	let student = studentsJSON.find(function(student){
		return student.id == studentID
	});
	console.log(student)

	if (student == undefined){
		res.status(404);
		res.send({error: "ressource not found"});
	}

	res.send(student);
});


module.exports = router;
