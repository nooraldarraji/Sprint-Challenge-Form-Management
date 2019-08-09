import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";


 describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  })


  it("button being used", () => {
    let click = false;
    const { getByText } = render(<Display btn={() => (click = true)} />);
    const button = getByText(/Show data/i);
    fireEvent.click(button);
    expect(click).toBe(true);
  })


  it("Check Props being passed", () => {
    const display = render(
      <Display
        dataStatus={true}
        data={[
          {
            name: "test"
          }
        ]}
      />
    );
    display.getByText(/^Name: test$/i); // ^ is for Everyting started with N and $ everything ends with t in a line and i for case insensitive.
  });
});