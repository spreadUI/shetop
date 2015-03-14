;(function(obj){
var returnObj = {};
obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name]
		};
	};
})(app.models);
