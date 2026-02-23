import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact Component", () => {
  it("renders contact section title", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/Get In Touch/i);
  });

  it("contains email and phone references", () => {
    render(<Contact />);
    const emailRef = screen.getByText(/vasanthakumartech@gmail.com/i);
    const phoneRef = screen.getByText("+91-9788145142");
    expect(emailRef).toBeInTheDocument();
    expect(phoneRef).toBeInTheDocument();
  });

  it("renders a contact form with standard inputs", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitBtn = screen.getByRole("button", { name: /send/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
