import React, {useEffect, useRef} from "react";
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {LeafletParameters} from "../../../const/const";
import 'leaflet/dist/leaflet.css';
import propTypes from "prop-types";


const Map = (props) => {
  const {points} = props;
  const activePoint = props.activePoint;
  const mapRef = useRef();
  const city = points[0].city;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });
    return () => {
      mapRef.current.remove();
    }
  }, [city]);

  useEffect(() => {

    leaflet.tileLayer(LeafletParameters.TILE_LAYER, {
      attribution: LeafletParameters.ATTRIBUTION
    }).addTo(mapRef.current);

    const markerGroup = leaflet.layerGroup().addTo(mapRef.current);

    points.forEach((point) => {

      const customIcon = leaflet.icon({
        iconUrl: activePoint !== null && point.id === activePoint.id ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      }
      ).addTo(markerGroup).bindPopup(point.title);
    });

    return () => {
      markerGroup.clearLayers();
    };
  }, [points, activePoint]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapRef}></div>
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
  }),
  points: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        city: propTypes.shape({
          location: propTypes.shape({
            latitude: propTypes.number.isRequired,
            longitude: propTypes.number.isRequired,
            zoom: propTypes.number.isRequired
          }),
          name: propTypes.string.isRequired
        }),
        price: propTypes.number.isRequired,
        images: propTypes.array.isRequired,
        isPremium: propTypes.bool.isRequired,
        isFavorite: propTypes.bool.isRequired,
        type: propTypes.string.isRequired,
        description: propTypes.string.isRequired
      }))
};

const mapStateToProps = (state) => ({
  marker: state.markerImage,
  activePoint: state.active_point
});

export {Map};

export default connect(mapStateToProps, null)(Map);
