import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {LeafletParameters} from "../../../const/const";
import "leaflet/dist/leaflet.css";
import {offersValid} from "../../../prop-types/offers";


const Map = (props) => {
  const {points, activePoint} = props;
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
    };
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
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = offersValid;

const mapStateToProps = ({MAIN}) => ({
  marker: MAIN.markerImage,
  activePoint: MAIN.active_point
});

export {Map};

export default connect(mapStateToProps, null)(Map);
