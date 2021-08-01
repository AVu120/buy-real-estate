import { render, screen, fireEvent } from "@testing-library/react";
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

describe("functionality works", () => {
  test("remove property", () => {
    render(<App />);
    const removePropertyButton = screen.getByText(/Remove property/i);
    fireEvent.click(removePropertyButton);
    expect(screen.queryByText(/Remove property/i)).toBe(null);
  });
  test("add property", async () => {
    render(<App />);
    const addPropertyButtons = screen.getAllByText(/Add property/i);
    fireEvent.click(addPropertyButtons[0]);
    const removePropertyButtons = await screen.findAllByText(
      /Remove property/i
    );
    expect(removePropertyButtons.length).toBe(2);
  });

  test("remove property then add property", async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Remove property/i));
    expect(screen.queryByText(/Remove property/i)).toBe(null);
    const addPropertyButtons = screen.getAllByText(/Add property/i);
    fireEvent.click(addPropertyButtons[0]);
    await screen.findByText(/Remove property/i);
  });

  test("Add property then remove property", async () => {
    render(<App />);
    const addPropertyButtons = screen.getAllByText(/Add property/i);
    fireEvent.click(addPropertyButtons[0]);
    const removePropertyButtons = await screen.findAllByText(
      /Remove property/i
    );
    expect(removePropertyButtons.length).toBe(2);
    fireEvent.click(removePropertyButtons[0]);
    const updatedRemovePropertyButtons = await screen.findAllByText(
      /Remove property/i
    );
    expect(updatedRemovePropertyButtons.length).toBe(1);
  });
});
