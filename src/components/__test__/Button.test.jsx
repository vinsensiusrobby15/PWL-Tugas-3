import { render, screen } from "@testing-library/react";
import { SendButton } from "../Button";

// Send button should be rendered
it("Send button can be render", () => {
    render(<SendButton text={"kirim"}/>);
    expect(screen.getByRole("button", {name: /kirim/i})).toBeInTheDocument();
})
// Send button can have className
it("Send buttob must have a className", () => {
    render(<SendButton text={"kirim"} styles={"send"}/>);
    expect(screen.getByRole("button", {name: /kirim/i})).toHaveClass("send");
})