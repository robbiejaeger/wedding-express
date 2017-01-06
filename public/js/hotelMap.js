var hotels = [
  {
    name: "Steamboat Grand",
    address: "2300 Mt Werner Cir, Steamboat Springs, CO 80487",
    phone: "(970) 871-5500",
    location: {lat: 40.458660, lng: -106.806737},
    website: "http://steamboatgrand.com"
  },
  {
    name: "Sheraton Steamboat Resort",
    address: "2200 Village Inn Ct, Steamboat Springs, CO 80487",
    phone: "(970) 879-2220",
    location: {lat: 40.458273, lng: -106.805071},
    website: "http://sheratonsteamboatresort.com"
  },
  {
    name: "Hampton Inn &amp; Suites Steamboat Springs",
    phone: "(970) 871-8900",
    address: "725 S Lincoln Ave, Steamboat Springs, CO 80488",
    location: {lat: 40.473064, lng: -106.827062},
    website: "http://hamptoninn3.hilton.com/en/hotels/colorado/hampton-inn-and-suites-steamboat-springs-SBSCOHX/index.html"
  },
  {
    name: "Quality Inn &amp; Suites",
    phone: "(970) 879-6669",
    address: "1055 Walton Creek Rd, Steamboat Springs, CO 80487",
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
            <p>Phone: ${hotel.phone}</p>
            <p>${hotel.address}</p>
            <p><a href="${hotel.website}" target="_blank">Hotel Website</a></p>
          </div>`
};

function closeInfoWindows(infoWindows) {
  infoWindows.forEach(function(infoWin){
    infoWin.close();
  });
};
