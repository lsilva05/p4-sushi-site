// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

// Good schtuff

new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.659581, 
		lon: -117.4236639,
		zoom: 18
	}]
}).Load(); 


	console.log('Page Loaded. Lets Do this!');

}); 