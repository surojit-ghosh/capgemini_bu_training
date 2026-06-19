import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChangeinText from "./ChangeinText";

describe("ChangeinText", () => {
  test("should change the text when user types in the input field", async () => {
    render(<ChangeinText />);
    const myinput = screen.getByPlaceholderText("Enter text here");
    await userEvent.type(myinput, "Surojit");
    expect(screen.getByText("Name is : Surojit")).toBeInTheDocument();
  });

  test("should change the checkbox status when user clicks on it", async () => {
    render(<ChangeinText />);
    const mycheckbox = screen.getByRole("checkbox");
    await userEvent.click(mycheckbox);
    expect(screen.getByText("Checkbox is checked")).toBeInTheDocument();
    await userEvent.click(mycheckbox);
    expect(screen.getByText("Checkbox is unchecked")).toBeInTheDocument();
  });
});
