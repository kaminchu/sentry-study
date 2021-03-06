// @flow
import React from "react";
import Root from "../../src/js/components/root";
import renderer from "react-test-renderer";

describe("components/root", () => {
  test("snapshot test", () => {
    const component = renderer.create(
      <Root />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});