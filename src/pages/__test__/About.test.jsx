import { render, screen } from "@testing-library/react";
import About from "../About";

// About page should be rendered
it("About page can be render", () => {
    render(<About />);
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
})