import { render, screen } from "@testing-library/react";
import Timeline from "./Timeline";

// Mock IntersectionObserver to avoid jsdom missing errors
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Timeline Component", () => {
  it("renders a section heading", () => {
    render(<Timeline />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/Professional Experience/i);
  });

  it("renders 3 distinct companies", () => {
    render(<Timeline />);
    // Just looking for generalized role text that should appear 3 times based on requirements
    const roleTexts = screen.getAllByRole("article"); // assuming our items use article tag
    expect(roleTexts.length).toBe(3);
  });
});
