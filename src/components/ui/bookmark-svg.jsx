import React, {useState} from "react";
import {offerValid} from "../../prop-types/offer";
import {useSelector} from "react-redux";
import {nameSpace} from "../../store/root-reducer";

const BookmarkSvg = ({offer}) => {
  const {favorites} = useSelector((state) => state[nameSpace.FAVORITES]);
  const [hover, setHover] = useState(false);
  const isFavorite = favorites.find((item) => item.id === offer.id);
  const isFavoriteStroke = `${isFavorite || hover ? `#4481c3` : `#97979`}`;
  const isFavoriteFill = `${isFavorite|| hover ? `#4481c3` : `#ffffff`}`;
  return (
    <>
      <svg className="place-card__bookmark-icon" width="18" height="19" style={{stroke: `${isFavoriteStroke}`, fill: `${isFavoriteFill}`}} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </>
  );
};

BookmarkSvg.propTypes = offerValid;
export default BookmarkSvg;
