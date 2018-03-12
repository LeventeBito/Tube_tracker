
function testfunction() {
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
    
    var origin_input = document.getElementById('start');
	var destination_input = document.getElementById('end');
	
    
    var autocomplete_origin = new google.maps.places.Autocomplete(origin_input); 
	var autocomplete_destination = new google.maps.places.Autocomplete(destination_input);     
  

    
 /* var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 54, lng: -5}
  });*/
  //directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));
     
   
  var control = document.getElementById('right-panel');
  control.style.display = 'block';
  //map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler = function() {
     
    calculateAndDisplayRoute(directionsService, directionsDisplay);
   
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
 //  document.getElementById('mytime').addEventListener('change', onChangeHandler);
}
google.maps.event.addDomListener(window, 'load', testfunction);

function calculateAndDisplayRoute(directionsService, directionsDisplay, ) {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
//  var time = document.getElementById('mytime').value;
    directionsService.route({
    origin: start,
    destination: end,   
    travelMode: 'TRANSIT'
  // departureTime: time,    
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
    
}




/*
function allinall(){
var placeSearch, autocomplete, geocoder;

function initAutocomplete() {
  geocoder = new google.maps.Geocoder();
  autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('start'))

  autocomplete.addListener('place_changed', fillInAddress);
}

function codeAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        alert(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

function fillInAddress() {
  var place = autocomplete.getPlace();
  alert(place.place_id);
  //   codeAddress(document.getElementById('autocomplete').value);
}
}
*/

/*
function bleh(){
   var input = document.getElementById('right-panel');
  var searchBox = new google.maps.places.SearchBox(input);
  
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
}
*/