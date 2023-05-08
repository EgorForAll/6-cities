import React, {useEffect, useRef} from "react";
import leaflet from 'leaflet';
import {LeafletParameters} from "../../../const/const";
import 'leaflet/dist/leaflet.css';
import propTypes from "prop-types";


const Map = ({city}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet.tileLayer(LeafletParameters.TILE_LAYER, {
      attribution: LeafletParameters.ATTRIBUTION
    }).addTo(mapRef.current);

    // для первого задания
    const customIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    leaflet.marker({
      lat: city.location.latitude,
      lng: city.location.longitude
    },
    {
      icon: customIcon
    }
    ).addTo(mapRef.current).bindPopup(city.name);

    // points.forEach((point) => {
    //   const customIcon = leaflet.icon({
    //     iconUrl: 'img/pin.svg',
    //     iconSize: [30, 30]
    //   })

    //   leaflet.marker({
    //     lat: point.lat,
    //     lng: point.lng
    //   },
    //   {
    //     icon: customIcon
    //   }
    //   ).addTo(mapRef).bindPopup(point.title)

    //   return () => {
    //     mapRef.current.remove();
    //   }
    // });
  }, []);

  return (
    <div id="map" ref={mapRef}></div>
  );
};

Map.propTypes = {
  city: propTypes.shape({
    location: propTypes.shape({
      latitude: propTypes.number.isRequired,
      longitude: propTypes.number.isRequired,
      zoom: propTypes.number.isRequired
    }),
    name: propTypes.string.isRequired
  })
};
export default Map;
