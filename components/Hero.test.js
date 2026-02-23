import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders standard developer greeting", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const subtext = screen.getByText(/7\+ years of experience/i);
    expect(subtext).toBeInTheDocument();
  });

  it("renders a placeholder profile picture", () => {
    render(<Hero />);
    const image = screen.getByAltText(/profile picture/i);
    expect(image).toBeInTheDocument();
  });

  it("renders a scroll indicator loop", () => {
    render(<Hero />);
    const scrollIndicator = screen.getByText(/scroll to explore/i);
    expect(scrollIndicator).toBeInTheDocument();
  });
});
