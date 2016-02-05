if (Meteor.isClient) { 
  Template.body.helpers({
    locations: [
      { text: "Church of the Good Shepherd - 1601 North Street SE"},
      { text: "Gloria Dei Lutheran Church - 1515 Harrison Ave NW"},
      { text: "Crain's Office Supply - 1006 4th Ave E"},
      { text: "Haggen NW Fresh- 1313 Cooper Point Rd SW"},
      { text: "The Evergreen State College - 2700 McCann Plaza Dr NW"},
      { text: "Thurston County Courthouse - 2000 Lakeridge Drive SW"}
    ]
  });
} 

Router.map(function () {
  this.route('Contact_us');
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.body.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      var latLng = Geolocation.latLng();
      if (GoogleMaps.loaded() && latLng) {
        // Map initialization options
        return {
          //center: new google.maps.LatLng(47.2136, -122.1631),
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: 14
        };
      }
      console.log("Map is ready and showing");
    }
  });

  /*
  Template.body.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
       if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }
      else{
    showError("Your browser doesn't support geolocation!");
        }

      // Now get user's location
    function locationSuccess(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      }
      var userLatLng = new google.maps.LatLng(lat, lon);
      var marker = new google.maps.Marker({
        position: userLatLng,
        map: map.instance 
    });
  });
  */
}