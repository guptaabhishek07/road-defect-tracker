mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWswMDA0IiwiYSI6ImNtYzRmdXQ3dTAwZGcybnNhNGRvYWhvbTMifQ.klqFXkizUfmwZr-WTRGAgg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.5946, 12.9716],
  zoom: 10
});

let clickedCoords = null;
let defectMarkers = [];

// Allow user to mark location
map.on('click', function (e) {
  clickedCoords = e.lngLat;

  if (window.defectMarker) {
    window.defectMarker.remove();
  }

  window.defectMarker = new mapboxgl.Marker({ color: 'blue' })
    .setLngLat(clickedCoords)
    .addTo(map);
});

function submitDefect() {
  const type = document.getElementById('defectType').value;
  const severity = parseInt(document.getElementById('severity').value);
  const notes = document.getElementById('notes').value;

  if (!clickedCoords) {
    alert("Please click on the map to mark the defect location.");
    return;
  }

  const defectData = {
    type,
    severity,
    notes,
    location: {
      lng: clickedCoords.lng,
      lat: clickedCoords.lat
    }
  };

  fetch('https://4k9u4uoyoh.execute-api.ap-south-1.amazonaws.com/dev_ap_south_1/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(defectData)
  })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not OK');
      return response.json();
    })
    .then(data => {
      alert('✅ Defect submitted successfully!');
      clickedCoords = null;
      if (window.defectMarker) window.defectMarker.remove();
      loadDefects(); // refresh markers
    })
    .catch(err => {
      alert('❌ Submission failed: ' + err.message);
      console.error(err);
    });
}

function loadDefects() {
  fetch('https://4k9u4uoyoh.execute-api.ap-south-1.amazonaws.com/dev_ap_south_1/defects')
    .then(res => res.json())
    .then(defects => {
      // Clear old markers
      defectMarkers.forEach(m => m.remove());
      defectMarkers = [];

      defects.forEach(d => {
        const type = d.type;
        const severity = d.severity;
        const notes = d.notes;
        const lng = d.longitude;
        const lat = d.latitude;

        const marker = new mapboxgl.Marker({ color: 'red' })
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.Popup().setHTML(`
            <b>${type}</b><br>
            Severity: ${severity}<br>
            Notes: ${notes}
          `))
          .addTo(map);
        defectMarkers.push(marker);
      });
    })
    .catch(err => console.error("❌ Failed to load defects:", err));
}


// Initial load
loadDefects();
