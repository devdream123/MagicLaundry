$(document).ready(function (){

	var uluru = {lat: -36.908760, lng: 174.666970};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
    });
});