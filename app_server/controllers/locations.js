var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
   };
   if (process.env.NODE_ENV === 'production') {
      apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var renderHomePage = function(req, res, responseBody){
  res.render('locations-list', { 
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find place to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody,
  });
};

/*Get 'home' page*/
module.exports.homelist = function(req, res, next) {
  var requestOptions, path;
  path = '/api/locations';
  requestOptions = {
     url : apiOptions.server + path,
     method : "GET",
     json : {},
     qs : {
       lng : -0.7992599,
       lat : 51.378091,
       maxDistance : 20
     }
   };
 request(
    requestOptions,
    function(err, response, body) {
      renderHomePage(req, res, body);
    }
  );
};

/*Get 'location info' page*/
module.exports.locationinfo = function(req, res, next) {
  res.render('location-info', { 
    title: 'Location info',
    sidebar: {
      context: "Simon's cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
      callToAction: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
     },
    location: {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      coords: {lat: 9.1518679 , lng: 7.353768400000035},
      openingTimes: [{ 
       days: 'Monday - Friday',
       opening: '7:00am',
       closing: '7:00pm',
       closed: false
     },{
       days: 'Saturday',
       opening: '8:00am',
       closing: '5:00pm',
       closed: false
    },{
       days: 'Sunday',
       closed: true
    }],
    facilities: ["Hot drinks", "Food", "Premium wifi"],
    reviews: [{
      author: 'Simon Holmes',
      rating: 5,
      timeStamp: '16 July 2013',
      reviewText: "What a great place. I can't say enough good things about it."
     },{
      author: 'Charlie Chaplin',
      rating: 3,
      timeStamp: '16 June 2013',
      reviewText: "It was okay. Coffee wasn't great, but the wifi was fast."
     }],
    } 
  });
};

/*Get 'review' page*/
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { 
    title: 'Review Starcups on Loc8r',
    location: {
      name: "Starcups",
    }
  });
};
