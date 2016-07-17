module.exports = function(len){
	var rdmString = "";
	for(;rdmString.length < len;rdmString += Math.random().toString(36).substring(2)){
		return rdmString.substr(0,len);
	}
}	