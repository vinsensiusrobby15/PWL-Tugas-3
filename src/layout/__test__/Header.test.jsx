import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Header should have title
it("Header should have title", () => {
    render(<Header title={"Ini Judul"} />);
    expect(screen.getByText(/ini judul/i)).toBeInTheDocument();
})

// Header should have desc
it("Header should have desc", () => {
    render(<Header desc={"Ini deskripsi"} />);
    expect(screen.getByText(/ini deskripsi/i)).toBeInTheDocument();
})