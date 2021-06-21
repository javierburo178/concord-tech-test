import React from "react";
import Counter from "../../Components/Counter";
import { shallow } from "enzyme";

describe("<Counter />", () => {
  test("render component Counter", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.length).toEqual(1);
  });
});
