import React from "react";
import {render} from "@testing-library/react";
import CardFavorite from "./card-favorite";
import {OFFER_TEST} from "../../../const/const";

test(`Schould CardFavorite render correctly`, () => {
  const {container} = render(<CardFavorite  offer={OFFER_TEST}/>);
  expect(container).toMatchSnapshot();
})
