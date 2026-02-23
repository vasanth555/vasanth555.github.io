import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the copyright text", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} .* All rights reserved.`, "i"),
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it("matches glassmorphism theme requirements", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement.className).toContain("footer-glass");
  });
});
