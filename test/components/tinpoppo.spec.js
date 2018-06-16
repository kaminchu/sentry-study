// @flow
import React from "react";
import Tinpoppo from "../../src/js/components/tinpoppo";
import renderer from "react-test-renderer";

describe("components/tinpoppo", () => {
  test("snapshot test", () => {
    const component = renderer.create(
      <Tinpoppo />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});