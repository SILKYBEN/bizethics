/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new': function (req,res){
		res.view();
	},

	create : function(req, res, next){

	 	User.create(req.params.all(), function userCreated(err, user) {


	 		if (err) {
	 		 	console.log(err);
	 		 	req.session.flash = {

	 		 		err:err
	 		 	}

	 		 	return res.redirect('/user/new');
	 		 }
			

			req.session.authenticated=true;
			req.session.User = user;

			



			res.redirect('/');
			
			});
	},

	edit: function(req,res,next){
		User.findOne(req.param('id'),function foundUser(err,user){
			if (err) return next(err); 
			
			// req.session.User = user;
			if (!user) return next();
			req.session.authenticated=true;
			res.view({
				user:user
			});
		});
	},

	update: function(req,res,next){
		User.update(req.param('id'),req.params.all(),function userUpdated(err){
			if (err){
				console.log(err);
			 return res.redirect('/user/edit/'+ req.param('id')); 
			}
			res.redirect('/');
			// res.redirect('/user/show/'+ req.param('id'));
		});
	},

	destroy: function(req,res,next){
		User.findOne(req.param('id'), function foundUser(err, user){
			if (err) return next(err);
			if (!user) return next('user does not exist.');
			User.destroy (req.param('id'), function userDestroyed(err) {
				if (err) return next(err);
				});
			
			res.redirect('/user');
		});
	},


	show: function(req,res,next){
		User.findOne(req.param('id'),function foundUser(err,user){
			if (err) return next(err); 
			if (!user) return next();
			req.session.authenticated=true;
			
			res.view({
				user:user
			});
		});
	}
	
};

