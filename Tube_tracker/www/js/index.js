$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
     testfunction();
  });            
});            





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
   document.getElementById('submitButton').addEventListener('click', onChangeHandler);
}

google.maps.event.addDomListener(window, 'load', testfunction);

function calculateAndDisplayRoute(directionsService, directionsDisplay, ) {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
var date = document.getElementById('mydate').value    
 var time = document.getElementById('mytime').value;
    
    var date_obj = new Date(date + " " + time);
    

    
    directionsService.route({
        origin: start,
        destination: end,   
        travelMode: 'TRANSIT',
        transitOptions : {
            departureTime: date_obj 
        }
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
        
        console.log(response);
        
    } else {
      //window.alert('Directions request failed due to ' + status);
    }
  });
    
}

