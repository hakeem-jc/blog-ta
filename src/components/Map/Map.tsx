import { useMemo,FC } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './Map.css';

interface MapsInterface  {
    lat:number;
    long:number;
}

const Map:FC<MapsInterface> = (props) => {
  const { isLoaded } = useLoadScript({
    //@ts-ignore
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <p>Loading Map</p>;
  return <MapObject lat={props.lat} long={props.long} />;
}

const MapObject:FC<MapsInterface> = (props) => {
  const center = useMemo(() => ({ lat: props.lat, lng: props.long }), [props.lat,props.long]);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;