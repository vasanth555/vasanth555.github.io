import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects Component", () => {
  it("renders the projects section heading", () => {
    render(<Projects />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/Featured Projects/i);
  });

  it("renders multiple project cards with links", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    // Expect at least 2 links for standard layout checking
    expect(links.length).toBeGreaterThanOrEqual(2);
  });
});
