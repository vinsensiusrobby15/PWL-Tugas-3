import { render, screen } from "@testing-library/react";
import InputMessages from "../InputMessages";

// Input type messages (textarea) should be rendered
it("Input messages can be render", () => {
    render(<InputMessages placeholder={"kirim pesan"} />);
    expect(screen.getByPlaceholderText("kirim pesan")).toBeInTheDocument();
})