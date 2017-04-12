/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new': function (req,res){
		res.view();
	},

	create : function(req, res, next){

	 	Product.create(req.params.all(), function productCreated(err, product) {


	 		if (err) {
	 		 	console.log(err);
	 		 	req.session.flash = {

	 		 		err:err
	 		 	}

	 		 	return res.redirect('/product/new');
	 		 }
			

			req.session.authenticated=true;
			req.session.Product = product;

			



			res.redirect('/upload-file');
			
			});
	},
	newUpload: function(req, res) {
	// var user;
	    	    if (req.method === 'GET')
	        return res.json({ 'status': 'GET not allowed' });
	    //	Call to /upload via GET is error

	    var uploadFile = req.file('uploadFile');
	    // console.log('First Step: ', uploadFile);

	    uploadFile.upload({saveAs: function(file, cb) { cb(null, file.filename);
  }, adapter: require('skipper-s3'), key: 'AKIAJMWDE6UB2ORJEN7A', secret: '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', bucket: 'gidimed'}, function onUploadComplete(err, files) {
	        //	Files will be uploaded to amazon

	        if (err) return res.serverError(err);
	         if (files.length === 0){
		      return res.badRequest('No file was uploaded');
		    }
		    // console.log('2nd Step : ', files);
		    // avatarUrl: require('util').format('%s/assets/images/%s', sails.getBaseUrl(), req.session.User );
		    imageName: req.param('files[0].filename');

		    
		    	

		    	var filess = { //#C
								fd: req.param('files[0].fd'),
								imageName: req.param('files[0].filename')
		};
		// res.set("Content-disposition", "attachment; filename='" + file.name + "'");
		// req.session.User.avatarFd = files[0].fd;
		// req.session.User.avatarName = files[0].filename;
		// req.session.Article.imageName = files[0].filename;
		// console.log('Third step : ');

		Product.update(req.session.Product, {

			    	
			      imageName: files[0].filename

			      

			    })
			    .exec(function (err){
			      if (err) return res.negotiate(err);


			    } );

		  // Save the "fd" and the url where the avatar for a user can be accessed
			    // User.update(req.session.User, {

			    
			    //   avatarFd: files[0].fd

			    //   // console.log('avatarFd : ', avatarFd);

			    // })
			    // .exec(function (err){
			    //   if (err) { 
			    //   	// console.log('avatarFd err : ', err);
			    //   	return res.negotiate(err); 
			    //   } 

			    //    // console.log(req.session.User.avatarFd);
			    //    // console.log(req.session.User.avatarName);
			       

			    //   // return res.ok();
			    // });
		
		    	 res.redirect('/product');



		    	
	    });
	},

	edit: function(req,res,next){
		Product.findOne(req.param('id'),function foundProduct(err,product){
			if (err) return next(err); 
			
			
			if (!product) return next();
			req.session.authenticated=true;
			res.view({
				product:product
			});
		});
	},

	update: function(req,res,next){
		Product.update(req.param('id'),req.params.all(),function productUpdated(err){
			if (err){
				console.log(err);
			 return res.redirect('/product/edit/'+ req.param('id')); 
			}
			res.redirect('/');
			// res.redirect('/user/show/'+ req.param('id'));
		});
	},

	destroy: function(req,res,next){
		Product.findOne(req.param('id'), function foundProduct(err, product){
			if (err) return next(err);
			if (!product) return next('product does not exist.');
			Product.destroy (req.param('id'), function productDestroyed(err) {
				if (err) return next(err);
				});
			
			res.redirect('/product');
		});
	},


	show: function(req,res,next){
		Product.findOne(req.param('id'),function foundProduct(err,product){
			if (err) return next(err); 
			if (!product) return next();
			req.session.authenticated=true;
			
			res.view({
				product:product
			});
		});
	}
	
};

