//JavaScript Functions Cheat Sheet

// Async template without using AJAX

var xhr = new XMLHttpRequest();
xhr.open('GET','URL',true);
xhr.onload= function(){
	parsedJSON = JSON.parse(this.responseText);
};
xhr.send();
	
// Async template function with callback functionality built in

function xhrGet(reqUri, callback, type){
	var caller = xhrGet.caller;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", reqUri, true);

	if (type){
		xhr.responseType = type;
	}
	xhr.onload = function() {
		if(callback){
			try {
				callback(xhr);
			} catch(e) {
				throw 'xhrGet failed:\n' + reqUri+ '\nException:'+e+'\nresponseText:'+xhr.responseText+'\ncaller:'+caller;
			}
		}
	}
	xhr.send();
};
