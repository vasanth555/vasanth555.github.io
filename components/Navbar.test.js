import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("renders a logo or name", () => {
    render(<Navbar />);
    const logo = screen.getByText(/Vasanth Portfolio/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    const links = ["Experience", "Projects", "Contact"];
    links.forEach((link) => {
      const navItem = screen.getByText(link);
      expect(navItem).toBeInTheDocument();
      expect(navItem.closest("a")).toHaveAttribute(
        "href",
        `#${link.toLowerCase()}`,
      );
    });
  });

  it("has a glassmorphism class type", () => {
    render(<Navbar />);
    const navElement = screen.getByRole("navigation");
    // Using string matching for className since CSS modules aren't fully resolved in jsdom without mocks sometimes, but let's test a global class or just regular class logic.
    expect(navElement.className).toContain("glass-nav");
  });
});
