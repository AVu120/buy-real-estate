import { findAllByText } from "@testing-library/react";
import { render, screen, fireEvent, findByText } from "@testing-library/react";
import App from "./App";

describe("Renders app correctly", () => {
  test("Renders Results column correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Results/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Renders Saved Properties column correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Saved Properties/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Functionality works", () => {
  test("Remove property", () => {
    render(<App />);
    const removePropertyButton = screen.getByText(/Remove property/i);
    fireEvent.click(removePropertyButton);
    expect(screen.queryByText(/Remove property/i)).toBe(null);
  });
  test("Add property", async () => {
    render(<App />);
    const addPropertyButtons = screen.getAllByText(/Add property/i);
    fireEvent.click(addPropertyButtons[0]);
    const removePropertyButtons = await screen.findAllByText(
      /Remove property/i
    );
    expect(removePropertyButtons.length).toBe(2);
  });

  test("Remove property then add property", async () => {
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

  test("Display added property as 'already added'", async () => {
    render(<App />);
    const addPropertyButtons = screen.getAllByText(/Add property/i);
    fireEvent.click(addPropertyButtons[0]);
    expect((await screen.findAllByText(/Already added/i)).length).toBe(2);
    const removePropertyButtons = screen.getAllByText(/Remove property/i);
    fireEvent.click(removePropertyButtons[1]);
    expect((await screen.findAllByText(/Already added/i)).length).toBe(1);
  });
});
