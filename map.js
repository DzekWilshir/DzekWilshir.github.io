var gMapAPIKey = 'AIzaSyAfH0ugPGtJu0WbRhI28P3JRnwvO6-JJfI';

document.addEventListener('DOMContentLoaded', drawMap);



function drawMap() {
	var storeLocation = new google.maps.LatLng(43.354816, 19.343057);

	var mapOptions = {
	  'center' : storeLocation,
	  'zoom' : 14,
	  'mapTypeId' : google.maps.MapTypeId.ROADMAP,
	  'draggable' : false
	};
	
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	var marker = new google.maps.Marker({
		position: storeLocation,
		map: map,
		title: 'Katunska 17, Pljevlja'
  });
  
}
