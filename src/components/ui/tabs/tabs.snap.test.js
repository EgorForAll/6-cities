import React from "react";
import {render} from "@testing-library/react";
import Tabs from "./tabs";
import {CITIES_LIST} from "../../../const/const";

test(`Schould Tabs render correctly`, () => {
  const {container} = render(<Tabs arrayOfCities={CITIES_LIST}/>);
  expect(container).toMatchSnapshot();
})
