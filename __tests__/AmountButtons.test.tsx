import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AmountButtons from "@/components/AmountButtons/AmountButtons";

describe("AmountButtons Component", () => {
	it("renders correctly", () => {
		const increaseHandler = jest.fn();
		const decreaseHandler = jest.fn();
		render(
			<AmountButtons
				amount={10}
				increase={increaseHandler}
				decrease={decreaseHandler}
			/>
		);
		const amount = screen.getByText(/10/i);

		expect(amount).toHaveTextContent("10");
		expect(amount).not.toHaveTextContent("5");
	});

	it("handlers are called", async () => {
		const user = userEvent.setup();
		const increaseHandler = jest.fn();
		const decreaseHandler = jest.fn();
		render(
			<AmountButtons
				amount={2}
				increase={increaseHandler}
				decrease={decreaseHandler}
			/>
		);
		const buttons = screen.getAllByRole("button");

		await user.click(buttons[0]);
		await user.click(buttons[1]);

		expect(increaseHandler).toHaveBeenCalledTimes(1);
		expect(decreaseHandler).toHaveBeenCalledTimes(1);
	});
});
