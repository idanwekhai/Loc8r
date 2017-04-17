/*Get 'home' page*/
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { title: 'Home' });
};

/*Get 'location info' page*/
module.exports.locationinfo = function(req, res, next) {
  res.render('location-info', { title: 'Location info' });
};

/*Get 'review' page*/
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'Add Review' });
};
