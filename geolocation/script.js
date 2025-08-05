const locationButton = document.getElementById("location-button");
const output = document.getElementById("output");
const map = document.getElementById("map");
const watchButton = document.getElementById("watch-button");

let watch, watchId, leafletMap;

locationButton.addEventListener("click", () => {
  if (geolocationValidator()) return;

  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });
});

function success(position) {
  const { latitude, longitude } = position.coords;

  if (map.hasChildNodes()) {
    return;
  }

  leafletMap = L.map(map, {
    center: [latitude, longitude],
    zoom: 13,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(leafletMap);

  L.marker([latitude, longitude])
    .addTo(leafletMap)
    .bindPopup("You are here")
    .openPopup();
}

function error(err) {
  output.textContent = `Error: ${err.message}`;
  output.style.color = "red";
}

watchButton.addEventListener("click", () => {
  if (geolocationValidator()) return;

  output.textContent = "Watching yout location...";
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };
  watchId = navigator.geolocation.watchPosition(
    onLocationUpdate,
    onLocationError,
    options
  );
});

function onLocationUpdate(position) {
  const { latitude, longitude, accuracy } = position.coords;
  output.innerHTML = `Lat: ${latitude} <br/> Lon: ${latitude} <br /> Accuracy: ${accuracy}m`;
  if (!leafletMap) {
    leafletMap = L.map(map).setView([latitude, longitude], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      leafletMap
    );
    marker = L.marker([latitude, longitude])
      .addTo(leafletMap)
      .bindPopup("You are here watching")
      .openPopup();
  } else {
    leafletMap.setView([latitude, longitude]);
    marker.setLatLng([latitude, longitude]);
  }
}

function onLocationError(err) {
  output.textContent = `Error: ${err.message}`;
}

function geolocationValidator() {
  if (!navigator.geolocation) {
    output.textContent = "Geolocation is not supported by this browser.";
    return true;
  }

  return false;
}
