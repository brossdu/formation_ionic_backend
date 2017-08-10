var express = require('express');
var router = express.Router();

var coursesJSON = require('../data/courses.json');

/* GET students listing. */
router.get('/', function(req, res, next) {
  res.send(coursesJSON);
});

/*GET one specifi student */
router.get('/:courseID', function(req, res, next) {
	let courseID = req.params.courseID;
	let course = coursesJSON.find(function(course){
		return course.id == courseID
	});


	if (course == undefined){
		res.status(404);
		res.send({error: "ressource not found"});
	}

	res.send(course);
});


module.exports = router;

