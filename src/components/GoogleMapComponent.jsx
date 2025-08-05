// src/components/GoogleMapComponent.jsx
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const wasgamuwaLocation = {
  lat: 7.6735,
  lng: 80.9381,
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your key
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={wasgamuwaLocation}
      zoom={10}
      options={{ fullscreenControl: false }}
    >
      <Marker position={wasgamuwaLocation} title="Wasgamuwa National Park" />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
