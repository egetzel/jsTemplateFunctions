// checks password REGEX and throws an error if PW doesn't meet criteria
document.getElementById('exampleForm').onsubmit =function(){
	var pwREGEX = /^[A-Za-z\d]{6,8}$/;
	
	if(!pwREGEX.test(document.getElementById('password').value)){
		console.log('Regext did not match')
		var notify = document.getElementById('notify');
		if (notify === null) {
			
			notify = document.createElement('p');
			notify.textContent = 'Passwords need to be 6 to 8 letters long';
			notify.id = 'notify';
			console.log(notify);
			var body = document.getElementById('body');
			body.appendChild(notify);
			manipulateDOM()
		}
	}	 
};
	// appends new elements to the DOM
	var manipulateDOM = function(){
		var body = document.getElementById('body');
		var	newDiv = document.createElement('div');
		newDiv.id = 'gameContent';
	    console.log(newDiv);
	    var wrapper = document.createElement('canvas')
	    wrapper.id = 'gameCanvas';
	    
		body.appendChild(newDiv);
	    newDiv.appendChild(wrapper);
	};