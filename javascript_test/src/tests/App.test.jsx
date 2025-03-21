import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    expect(screen.getByText("Hello, Karol!")).toBeInTheDocument();
  });
});
