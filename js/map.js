$(document).ready(function (){

	var laundryPos = {lat: -33.902196, lng: 151.179325};

    var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
	  	center: laundryPos
    });



	var contentString = '<div id="content">'+
	        '<div id="siteNotice">'+
	        '</div>'+
	        '<h4 id="infoHeading" class="firstHeading">Laundry Magic</h4>'+
	        '<div id="bodyContent">'+
	        '<p><b>Address: </b>514 King Street. Newtown. NSW. Australia 2042' +
	        '<p><b>Phone: </b>02 9517 3883' +
	        '</div>'+
	        '</div>';

	var infoWindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 200
	});

    var marker = new google.maps.Marker({
		position: laundryPos,
		map: map,
		title: 'Laundry Magic'
    });
    infoWindow.open(map, marker);

});