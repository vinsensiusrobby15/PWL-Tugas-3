import { render, screen } from "@testing-library/react";
import InputText from "../InputText";

// Input type text should be rendered
it("Input text can be render", () => {
    render(<InputText type={"text"} placeholder={"nama lengkap"} />);
    expect(screen.getByPlaceholderText("nama lengkap")).toBeInTheDocument();
})