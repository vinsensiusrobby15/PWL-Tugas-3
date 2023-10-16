import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

// Footer should be rendered
it("Footer component can be render", () => {
    render(<Footer />);
    expect(screen.getByText(/vinsensius/i)).toBeInTheDocument();
})