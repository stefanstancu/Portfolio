
var isFaded = false;
var fadeCaller = "";
var elements = [0];
//id is the element which should not be faded
var toggleFade = function(id){
	
	

	if(id=="projects"){

		var elements = [document.getElementById("nm_wrap"),
						document.getElementById("center_image"),
						document.getElementById("about")
						];
	}

	else if (id=="about"){
		var elements = [document.getElementById("nm_wrap"),
						document.getElementById("center_image"),
						document.getElementById("projects")
						];
	}

	if(isFaded){
		unFade(id,elements);
		fadeCaller = id;
		isFaded = false;
	}
	else{
		fade(id,elements);
		fadeCaller = id;
		isFaded = true;
	}
};

var fade = function(id,elements){
	//add transition to all the element style, then set the desired opacity
	for (i=0; i<elements.length; i++){
		elements[i].style.transition="opacity 1.5s ease-in-out";
		elements[i].style.opacity = 0.25;
	}				
}

var unFade = function(id,elements){
	for (i=0; i<elements.length; i++){
		elements[i].style.transition="opacity 1.5s ease-in-out";
		elements[i].style.opacity = 1;
	}		
}