/*
	This script handles the fade logic when the satellite elements are clicked on
*/
var isFaded = false;
var fadeCaller = "";
var elements = [0];
//id is the element which should not be faded
function toggleFade (id){
	
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
		fadeCaller = id;
		unFade(elements);
		isFaded = false;
	}
	else{
		fadeCaller = id;
		fade(elements);
		isFaded = true;
	}
};

function fade (elements){
	//add transition to all the element style, then set the desired opacity
	for (i=0; i<elements.length; i++){
		elements[i].style.transition="opacity 1.5s ease-in-out";
		elements[i].style.opacity = 0.20;
	}
	document.getElementById(fadeCaller).style.opacity = 1;				
}

function unFade(elements){
	for (i=0; i<elements.length; i++){
		elements[i].style.transition="opacity 1.5s ease-in-out";
		elements[i].style.opacity = 1;
	}
	document.getElementById(fadeCaller).style.opacity = 1;		
}

