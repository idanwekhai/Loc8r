/*Get 'home' page*/
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { 
  	title: 'Loc8r - find a place to work with wifi',
  	pageHeader: {
  		title: 'Loc8r',
  		strapline: 'Find place to work with wifi near you!'
  	},
     locations: [{
        name: "Starcups",
        address: "125 High Street, Reading, RG6 1PS",
        ratings:  3,
        facilities: ["Hot drinks", "Food", "Premium wifi"],
        distance: "100m"
       },{
       	name: "White House",
        address: "Ile-ife Street, Along Moremi, REX 150",
        ratings: 4,
        facilities: ["Cold drinks", "Snacks", "Burgers", "Premium wifi"],
        distance: "120m"
       },{
        name: "Afrika",
        address: "Angola Hall, Afrikas Block, D Buttery",
        ratings: 2,
        facilities: ["Cold drinks", "Delicious Beans"],
        distance: "90m"
     }]
  });
};

/*Get 'location info' page*/
module.exports.locationinfo = function(req, res, next) {
  res.render('location-info', { title: 'Location info' });
};

/*Get 'review' page*/
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'Add Review' });
};
