import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Contact from "@/components/Contact/Contact";

describe("Contact Component", () => {
	it("renders correctly", () => {
		render(<Contact />);

		const inputEl = screen.getByRole("textbox");
		expect(inputEl).toHaveValue("");

		const btnEl = screen.getByRole("button", { name: /subscribe/i });
		expect(btnEl).toBeInTheDocument();
	});

	it("type in email input", async () => {
		const user = userEvent.setup();
		render(<Contact />);

		const inputEl = screen.getByRole("textbox");

		await user.type(inputEl, "krycha1515@gmail.com");

		expect(inputEl).toHaveValue("krycha1515@gmail.com");
	});

	it("click button", async () => {
		const user = userEvent.setup();
		render(<Contact />);

		const spyBtn = jest.spyOn(user, "click");
		const btnEl = screen.getByRole("button", { name: /subscribe/i });

		await user.click(btnEl);

		expect(spyBtn).toHaveBeenCalledTimes(1);
	});
});
