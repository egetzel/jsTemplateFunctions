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

// checks password REGEX and throws an error if PW doesn't meet criteria
document.getElementById('exampleForm').onsubmit(function(){
	var pwREGEX = /^[A-Za-z\d]{6,8}$/
	if(!passwordRegex.test(document.getElementById('examplePass').val)){
		console.log('Regext did not match')
		var notify = document.getElementById('notify');
		if (notify === null) {
			notify = document.createElement('p');
			notify.textContext = 'Passwords need to be 6 to 8 letters long'
			notify.id = 'notify'

			var body = document.getElementById('body');
			body.appendChild(notify);
		}
	}
});