import React from "react";
import { render } from "@testing-library/react";
import Publications from "./pages/publications";

test("renders learn react link", () => {
  const { getByText } = render(<Publications />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
