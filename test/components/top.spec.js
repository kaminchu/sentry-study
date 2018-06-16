// @flow
import React from "react";
import Top from "../../src/js/components/top";
import renderer from "react-test-renderer";

describe("components/tinpoppo", () => {
  test("snapshot test", () => {
    const component = renderer.create(
      <Top />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});