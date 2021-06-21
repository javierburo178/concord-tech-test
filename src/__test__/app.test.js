import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("<App />", () => {
  test("render component App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
