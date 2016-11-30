var hotels = [
  {
    name: "Steamboat Grand",
    location: {lat: 40.458660, lng: -106.806737},
    website: "http://steamboatgrand.com"
  },
  {
    name: "Sheraton Steamboat Resort",
    location: {lat: 40.458273, lng: -106.805071},
    website: "http://sheratonsteamboatresort.com"
  },
  {
    name: "Hampton Inn & Suites Steamboat Springs",
    location: {lat: 40.473064, lng: -106.827062},
    website: "http://hamptoninn3.hilton.com/en/hotels/colorado/hampton-inn-and-suites-steamboat-springs-SBSCOHX/index.html"
  },
  {
    name: "Quality Inn & Suites",
    location: {lat: 40.450229, lng: -106.815044},
    website: "https://www.choicehotels.com/colorado/steamboat-springs/quality-inn-hotels/co702?source=gyxt"
  }
];

function initMap() {
  var centerSteamboat = {lat: 40.462, lng: -106.82};
  var map = new google.maps.Map(document.getElementById('hotel-map'), {
    zoom: 14,
    center: centerSteamboat
  });

  createMarkers(map);
};

function createMarkers(map) {
  var infoWindows = [];

  hotels.forEach(function(hotel){
    var infowindow = new google.maps.InfoWindow({
      content: infoWindowContent(hotel)
    });
    infoWindows.push(infowindow);

    var marker = new google.maps.Marker({
      position: hotel.location,
      map: map
    });

    marker.addListener('click', function() {
      closeInfoWindows(infoWindows);
      infowindow.open(map, marker);
    });
  });
};

function infoWindowContent(hotel) {
  return `<div class="info-window">
            <h1>${hotel.name}</h1>
            <p><a href="${hotel.website}" target="_blank">Hotel Website</a></p>
          </div>`
};

function closeInfoWindows(infoWindows) {
  infoWindows.forEach(function(infoWin){
    infoWin.close();
  });
};
