import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders app correctly", () => {
  test("renders Results column correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Results/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Saved Properties column correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Saved Properties/i);
    expect(linkElement).toBeInTheDocument();
  });
});
