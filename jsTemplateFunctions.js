//JavaScript Functions Cheat Sheet

// Async template without using AJAX

var xhr = new XMLHttpRequest();
xhr.open('GET','URL',true);
xhr.onload= function(){
	parsedJSON = JSON.parse(this.responseText);
};
xhr.send()
	
