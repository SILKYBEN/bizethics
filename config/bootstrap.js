/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
// 	var dummyProducts= [{
//   "category": "Jenkins Group",
//   "brand": "Business Development",
//   "name": "Tazzy",
//   "description": "whiteboard turn-key bandwidth",
//   "imageName": "https://robohash.org/similiquenontemporibus.jpg?size=50x50&set=set1",
//   "amount": "$240.12"
// }, {
//   "category": "Haley-Hamill",
//   "brand": "Engineering",
//   "name": "Skinix",
//   "description": "engage distributed e-tailers",
//   "imageName": "https://robohash.org/velitsitet.png?size=50x50&set=set1",
//   "amount": "$489.78"
// }, {
//   "category": "Konopelski, O'Reilly and Bauch",
//   "brand": "Engineering",
//   "name": "Avamm",
//   "description": "optimize integrated initiatives",
//   "imageName": "https://robohash.org/etomnisiusto.jpg?size=50x50&set=set1",
//   "amount": "$136.12"
// }, {
//   "category": "McGlynn-Waters",
//   "brand": "Human Resources",
//   "name": "Kimia",
//   "description": "leverage sticky e-markets",
//   "imageName": "https://robohash.org/eumautemcumque.jpg?size=50x50&set=set1",
//   "amount": "$212.33"
// }, {
//   "category": "Muller-Parisian",
//   "brand": "Accounting",
//   "name": "Realpoint",
//   "description": "cultivate ubiquitous paradigms",
//   "imageName": "https://robohash.org/verorerumipsam.png?size=50x50&set=set1",
//   "amount": "$576.55"
// }, {
//   "category": "Mraz Group",
//   "brand": "Legal",
//   "name": "Agimba",
//   "description": "architect rich experiences",
//   "imageName": "https://robohash.org/ipsavitaevoluptas.bmp?size=50x50&set=set1",
//   "amount": "$928.37"
// }, {
//   "category": "Berge-Denesik",
//   "brand": "Sales",
//   "name": "Topiclounge",
//   "description": "iterate dot-com relationships",
//   "imageName": "https://robohash.org/magnivelnumquam.jpg?size=50x50&set=set1",
//   "amount": "$789.97"
// }, {
//   "category": "Parker, Weber and Koepp",
//   "brand": "Human Resources",
//   "name": "Flipstorm",
//   "description": "seize cross-media infomediaries",
//   "imageName": "https://robohash.org/placeataccusamuseum.jpg?size=50x50&set=set1",
//   "amount": "$40.95"
// }, {
//   "category": "Roberts LLC",
//   "brand": "Support",
//   "name": "Riffpedia",
//   "description": "disintermediate dot-com experiences",
//   "imageName": "https://robohash.org/autmaximequia.jpg?size=50x50&set=set1",
//   "amount": "$904.81"
// }, {
//   "category": "Hayes-Parisian",
//   "brand": "Legal",
//   "name": "Fivespan",
//   "description": "expedite integrated action-items",
//   "imageName": "https://robohash.org/autperferendisdolores.jpg?size=50x50&set=set1",
//   "amount": "$145.94"
// }];

// 	Product.count().exec(function(err, count){
// 		if (err){
// 			sails.log.error('already have data');
// 			return cb(err);
// 		}
// 		if (count > 0) return cb();
		
// 		Product.create(dummyProducts).exec(cb);
	
// 	});

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
