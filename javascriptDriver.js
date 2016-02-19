if (Meteor.isClient) { 
  Template.body.helpers({
    olympia: [
      { text: "Church of the Good Shepherd - 1601 North Street SE"},
      { text: "Gloria Dei Lutheran Church - 1515 Harrison Ave NW"},
      { text: "Crain's Office Supply - 1006 4th Ave E"},
      { text: "Haggen NW Fresh- 1313 Cooper Point Rd SW"},
      { text: "The Evergreen State College - 2700 McCann Plaza Dr NW"},
      { text: "Thurston County Courthouse - 2000 Lakeridge Drive SW"}
    ]
  });

  Template.body.helpers({
    lacey: [
      { text: "Fire District 3, Station 34 - 8407 Steilacoom Road SE"},
      { text: "Fire District 3, Station 35 - 3701 Willamette Drive NE"},
      { text: "Lacey City Hall - 420 College St SE"},
      { text: "Lacey Post Office - 5815 Lacey Blvd SE (next to the drive up mail boxes on Clearbrook Dr. SE)"},
      { text: "Martin Village - 5600 Martin Way E (Parking lot by Taco Bell)"},
      { text: "Woodland Retirement and Assisted Living Community - 4532 Intelco Loop SE"}
    ]
  });

  Template.body.helpers({
      tumwater: [
        { text: "Black Lake - Fire 5, Station 1 - 5911 Black Lake Boulevard SW, Olympia"},
        { text: "Tumwater Timberland Library - 7023 New Market St SW"},
        { text: "Tumwater School Administration - 621 Linwood Avenue SW"}
    ]
  });

  Template.body.helpers({
      northCounty: [
        { text: "South Bay - Fire 8, Station 81 - 3506 Shincke Road NE, Olympia"},
        { text: "South Bay - Fire 8, Station 83 - 5046 Boston Harbor Rd NE, Olympia"}
    ]
  });

  Template.body.helpers({
      southCounty: [
        { text: "Bucoda - 103 S Main St (across the street from the Liberty Market)"},
        { text: "Tenino School District Administration - 301 Old Highway 99 N"}
    ]
  });

  Template.body.helpers({
      southeastCounty: [
        { text: "Lackamas Elementary - 16240 Bald Hill Road SE, Yelm"},
        { text: "Rainier City Hall - 102 Rochester Street W"},
        { text: "Yelm School Administration - 110 1st Street N (in the parking lot across the street from the building)"}
    ]
  });

  Template.body.helpers({
      southwestCounty: [
        { text: "Grand Mound Center - 19949 Old Highway 99 SW, Rochester"},
        { text: "Littlerock - Fire 11 - 10828 Littlerock Road SW"},
        { text: "Rochester - Fire 1, Station 3 - 18346 Albany Street SW"}
    ]
  });

  Template.body.helpers({
      steamboat: [
        { text: "Fire 13, Station 1 - 3707 Steamboat Loop NW , Olympia"}
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
  
var latLng;

var locations = [
  //Olympia Area
  ["Church of the Good Shepherd", 47.015693, -122.880327],
  ["Gloria Dei Lutheran Church", 47.045438, -122.920795],
  ["Crain's Office Supply", 47.045903, -122.889725],
  ["Haggen NW Fresh", 47.034041, -122.941126],
  ["The Evergreen State College", 47.070621, -122.975550],
  ["Thurston County Courthouse", 47.029325, -122.912259],

  //Lacey Area
  ["Fire District 3, Station 34", 47.046257, -122.760674],
  ["Fire District 3, Station 35", 47.087262, -122.756488],
  ["Lacey City Hall", 47.044870, -122.822385],
  ["Lacey Post Office - (next to the drive up mail boxes on Clearbrook Dr. SE)", 47.035447, -122.806746],
  ["Martin Village - (Parking lot by Taco Bell)", 47.050695, -122.809381],
  ["Woodland Retirement and Assisted Living Community", 46.997026, -122.829927],

  //Tumwater Area
  ["Black Lake - Fire 5, Station 1", 46.994528, -122.985977],
  ["Tumwater Timberland Library", 46.984924, -122.913489],
  ["Tumwater School Administration", 47.006690, -122.912322],

  //North County
  ["South Bay - Fire 8, Station 81", 47.082048, -122.845710],
  ["South Bay - Fire 8, Station 83", 47.105178, -122.881059],

  //South County
  ["Bucoda - (across the street from the Liberty Market)", 46.880738, -117.364367],
  ["Tenino School District Administration", 46.861889, -122.849146],

  //Southeast County
  ["Lackamas Elementary", 46.850892, -122.487265],
  ["Rainier City Hall", 46.889787, -122.688449],
  ["Yelm School Administration - (in the parking lot across the street from the building)", 46.942029, -122.605436],

  //Southwest County
  ["Grand Mound Center", 46.798333, -123.012520],
  ["Littlerock - Fire 11", 46.930317, -122.990689],
  ["Rochester - Fire 1, Station 3", 46.820223, -123.096305],

  //Steamboat Island
  ["Fire 13, Station 1", 47.085221, -123.015991]
];

Template.body.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready("exampleMap", function(map) {
    // Add a marker to the map once it's ready
    latLng = Geolocation.latLng();
    var userPos = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      map: map.instance
    });
    var infowindow = new google.maps.InfoWindow();
    var markers, i;
    for(i = 0; i < locations.length; i++) {
      markers = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map.instance
      });
      google.maps.event.addListener(markers, 'click', (function(markers, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map.instance, markers);
        }
      })(markers, i));
    };
  });
});

Template.body.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    latLng = Geolocation.latLng();

    if (GoogleMaps.loaded() && latLng) {
      // Map initialization options
      return {
        //center: new google.maps.LatLng(47.2136, -122.1631),
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 14
      };
    }
    /* else {
      return {
      center: new google.maps.LatLng(47.0425, -122.8931),
      zoom: 10
      };
    } */
    console.log("Map is ready and showing");
  }
});



}

