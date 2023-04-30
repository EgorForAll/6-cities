import React, { useState } from "react";

const BookmarkSvg = ({offer}) => {
  const [hover, setHover] = useState(false)
  const isFavoriteStroke = `${offer.isFavorite || hover ? '#4481c3' : '#979797'}`;
  const isFavoriteFill = `${offer.isFavorite || hover ? '#4481c3' : '#ffffff'}`;
  const makeFavorite = () => {
    offer = Object.assign(offer, {isFavorite: !offer.isFavorite});
  }
  return (
    <>
      <svg className="place-card__bookmark-icon" width="18" height="19" style={{stroke: `${isFavoriteStroke}`, fill: `${isFavoriteFill}`}} onClick={() => makeFavorite()} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
       <span className="visually-hidden">To bookmarks</span>
    </>
  )
}

export default BookmarkSvg
