/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	category: {
  		type: 'string',
  		required: true
  	},
  	brand: {
  		type: 'string',
  		required: true
  	},
  	name:{
  		type: 'string',
  		required:true
  	},
  	description:{
  		type: 'string',
  		required: true
  		
  	},
  	imageName: {
  		type: 'string'
  		
  	},
  	amount:{
  		type: 'integer',
  		required:true
  	}
  	

  }
};

