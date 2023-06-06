import React from "react";

const PropertyInside = ({offer}) => {
  const createGoodItem = (arrayOfGoods) => arrayOfGoods.map((item) =>
  <li className="property__inside-item" key={arrayOfGoods.indexOf(item)}>
    {item}
  </li>
  )
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {offer.goods.length > 0 ? createGoodItem(offer.goods) : null}
      </ul>
    </div>
  );
};

export default PropertyInside;
