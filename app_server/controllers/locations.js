/*Get 'home' page*/
module.exports.homelist = function(req, res, next) {
  res.render('index', { title: 'Home' });
};

/*Get 'location info' page*/
module.exports.locationinfo = function(req, res, next) {
  res.render('index', { title: 'Location info' });
};

/*Get 'review' page*/
module.exports.addReview = function(req, res, next) {
  res.render('index', { title: 'Add Review' });
};
