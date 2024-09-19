// custom-button.test.tsx
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { CustomButton } from "./custom-button";

describe("CustomButton", () => {
  it("renders the button with the correct text", () => {
    const document = render(<CustomButton />);

    const buttonElement = document.getByRole("button", {
      name: "Custom Button",
    });

    expect(buttonElement).toBeInTheDocument();
  });
});
