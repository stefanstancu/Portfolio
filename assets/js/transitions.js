/*
	This script holds all the logic for all the transitions and their helper functions
*/

//Variable Declarations
var aboutOpen = false;
var projectsOpen = false;

//call init
init();

function init(){

	// Set the name wrapper to be the height it will be after the change in height
	var element = document.getElementById("nm_wrap");
	var wordsElement = document.getElementById("sub_words");
	var prevHeight = wordsElement.style.height;
	wordsElement.style.height = 'auto';
	var endHeight = getComputedStyle(element).height;
	wordsElement.style.height = prevHeight;
	element.style.height = endHeight;

	//Set the abt_line width
	document.getElementById('abt_line').style.width=0;
	document.getElementById('prj_line').style.width=0;

	//Add the event listener to the satellite buttons
	addHoverListener("about_button");
	addHoverListener("projects_button");

	//Set the satellite content height to 0
	document.getElementById('about_text').style.height = 0;
	document.getElementById('projects_text').style.height = 0;

	//Subtitle transition intro
	subTitleIntro();
}

function subTitleIntro(){

	// Left to right transition of the sub-title at the 2s mark
	setTimeout(function(){
		leftRightRevealAnimation("sub");
	},2000);

	// Down to bottom transition of the sub-title words at the 3.5 second mark
	setTimeout(function(){
		topDownRevealAnimation("sub_words",1.5);	
	},3500);
}

function toggleAbout(){
	
	var aboutElement = document.getElementById("about");

	if(!aboutOpen){
		
		removeHoverListener("about_button");

		//Move the about title up and enlarge
		aboutElement.style.top = "5%";
		aboutElement.style.fontSize = "3.5vw";
		aboutElement.style.transition = "top 1s ease-in-out, font-size 1s";

		//Reveal line at 1s mark
		setTimeout(function(){
			lineReveal("abt_line");
		},1000);

		//Reveal content at 2s mark
		setTimeout(function(){
			topDownRevealAnimation("about_text",2);
		},2000);

		aboutOpen = true;
	}

	else if(aboutOpen){

		topDownRetractAnimation("about_text",1.5);

		setTimeout(function(){
			lineRetract("abt_line");
		},1500);

		//Retract the about title and resize, re-add the listener.
		setTimeout(function(){
			aboutElement.style.top = "15%";
			aboutElement.style.fontSize = "3vw";
			aboutElement.style.transition = "top 1s ease-in-out, font-size 1s";
			addHoverListener("about_button");
		},2500);

		aboutOpen = false;
	}
}

function toggleProjects(){
	
	var projectsElement=document.getElementById("projects");

	if(!projectsOpen){
		
		removeHoverListener("projects_text");

		//Move the projects title down
		projectsElement.style.top = "85%";
		projectsElement.style.fontSize = "3.5vw";
		projectsElement.style.transition = "top 1s ease-in-out, font-size 1s";

		setTimeout(function(){
			lineReveal("prj_line");
		},1000);

		setTimeout(function(){
			//resize and move up simultaneously to anchor Projects title at the bottom of the page
			bottomUpRevealAnimation('projects_text',1);
			projectsElement.style.top ="15%";
			projectsElement.style.transition = "top 1s ease-in-out";
		},2000);

		projectsOpen = true;
	}
	else if(projectsOpen){

		//close the content
		document.getElementById('projects_text').style.height=0;
		projectsElement.style.top ="85%";
		projectsElement.style.transition = "top 1s ease-in-out";
		document.getElementById('projects_text').style.transition = "height 1s ease-in-out";

		//Retract the line
		setTimeout(function(){
			lineRetract("prj_line");	
		},1000);

		//Re-position the projects title, re-add the listener
		setTimeout(function(){
			projectsElement.style.top = "80%";
			projectsElement.style.fontSize = "3vw";
			projectsElement.style.transition = "top 1s ease-in-out, font-size 1s";
			addHoverListener("projects_button");
		},2000);	
			
		projectsOpen = false;
	}
}

function addHoverListener(id){

	document.getElementById(id).addEventListener("mouseenter", addListenerHandlerEnter);
	document.getElementById(id).addEventListener("mouseleave", addListenerHandlerLeave);
}

function removeHoverListener(id){

	document.getElementById(id).removeEventListener("mouseenter", addListenerHandlerEnter);
	document.getElementById(id).removeEventListener("mouseleave", addListenerHandlerLeave);
}

function addListenerHandlerEnter(event){

	event.target.style.fontSize="3.5vw";
	event.target.style.transition = "font-size 0.75s ease";
}

function addListenerHandlerLeave(event){

	event.target.style.fontSize="3vw";
	event.target.style.transition = "font-size 0.75s ease";
}

function lineReveal(id){

	var element = document.getElementById(id);
	element.style.width = "80%";
	element.style.transition = "width 1s ease-in-out";
}

function lineRetract(id){

	var element = document.getElementById(id);
	element.style.width = 0;
	element.style.transition = "width 1s ease-in-out";
}

/*
	The following functions provide the logic for the expansion transitions.
	They pre-calculate the dimension, then transition to that value.
	The code is relatively self-explanatory.
*/

function leftRightRevealAnimation(id){

	var element=document.getElementById(id);
	var prevWidth = element.style.width;
	element.style.width = 'auto';
	var endWidth = getComputedStyle(element).width;
	element.style.width = prevWidth;
	element.offsetWidth;
	element.style.transition = 'width 1.5s ease-in-out';
	element.style.width = endWidth;
	element.addEventListener('transitioned', function(event){
		if(event.propertyName=='width'){
			element.style.transition='';
			element.style.width='auto';
			element.removeEventListener('transitioned', transitionEnd, false);
		}
	},false);
}

function topDownRevealAnimation(id, duration){

	var element=document.getElementById(id);
	var prevHeight = element.style.height;
	element.style.height = 'auto';
	var endHeight = getComputedStyle(element).height;
	element.style.height = prevHeight;
	element.offsetHeight;
	element.style.transition = 'height '+duration+'s ease-in-out';
	element.style.height = endHeight;
	element.addEventListener('transitioned', function(event){
		if(event.propertyName=='height'){
			element.style.transition='';
			element.style.height='auto';
			element.removeEventListener('transitioned', transitionEnd, false);
		}
	},false);
}

function topDownRetractAnimation(id, duration){

	var element=document.getElementById(id);
	element.style.height = 0;
	element.style.transition = 'height '+duration+'s ease-in-out';
	element.addEventListener('transitioned', function(event){
		if(event.propertyName=='height'){
			element.style.transition='';
			element.removeEventListener('transitioned', transitionEnd, false);
		}
	},false);
}

function bottomUpRevealAnimation(id,duration){

	var element=document.getElementById(id);
	element.style.height = 'auto';
	var endHeight = getComputedStyle(element).height;
	element.style.height = 0;
	element.offsetHeight;
	element.style.transition = 'height '+duration+'s ease-in-out';
	element.style.height = endHeight;
	element.addEventListener('transitioned', function(event){
		if(event.propertyName=='height'){
			element.style.transition='';
			element.style.height='auto';
			element.removeEventListener('transitioned', transitionEnd, false);
		}
	},false);
}