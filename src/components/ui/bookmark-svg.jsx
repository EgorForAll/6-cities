import React, {useState} from "react";
import {offerValid} from "../../prop-types/offer";
import {useSelector} from "react-redux";
import {nameSpace} from "../../store/root-reducer";
import {FAVORITES_BUTTON_PROPERTY, FAVORITES_BUTTON} from "../../const/const";

const BookmarkSvg = ({offer, isPropertyPage}) => {
  const {favorites} = useSelector((state) => state[nameSpace.FAVORITES]);
  const [hover, setHover] = useState(false);
  const isFavorite = favorites.find((item) => item.id === offer.id);
  const isFavoriteStroke = `${isFavorite || hover ? `#4481c3` : `#97979`}`;
  const isFavoriteFill = `${isFavorite|| hover ? `#4481c3` : `#ffffff`}`;
  return (
    <>
      <svg className={isPropertyPage ? FAVORITES_BUTTON_PROPERTY.SVG_CLASS_NAME : FAVORITES_BUTTON.SVG_CLASS_NAME} width={isPropertyPage ? FAVORITES_BUTTON_PROPERTY.WIDTH : FAVORITES_BUTTON.WIDTH} height={isPropertyPage ? FAVORITES_BUTTON_PROPERTY.HEIGHT : FAVORITES_BUTTON.HEIGHT} style={{stroke: `${isFavoriteStroke}`, fill: `${isFavoriteFill}`}} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </>
  );
};

BookmarkSvg.propTypes = offerValid;
export default BookmarkSvg;
