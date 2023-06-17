import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// testing 3 things.
// 1. button should have correct initial color
// 2. button should have correct initial Text.
// 3. Button should turn blue when clikced.

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // let's test for test2.
  expect(colorButton).toHaveTextContent("Change to blue");

  // let's test for test3.
  fireEvent.click(colorButton);

  // let's test for test3.
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

test("button enabled and checkbox state", () => {
  render(<App />);
  const buttonEnabled = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonEnabled).toBeEnabled();

  const checkboxInput = screen.getByRole("checkbox");
  expect(checkboxInput).not.toBeChecked();
});
