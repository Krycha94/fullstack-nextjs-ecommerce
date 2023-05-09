import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Hero from "@/components/Hero/Hero";

describe("Hero Component", () => {
	it("renders correctly", () => {
		render(<Hero />);

		const headingEl = screen.getByRole("heading", {
			name: /arrivals sales/i,
			level: 1,
		});
		expect(headingEl).toBeInTheDocument();

		const linkEl = screen.getByRole("link", { name: /shop now/i });
		expect(linkEl).toHaveAttribute("href", "/products");

		const imgEl = screen.getByRole("img");
		expect(imgEl).toHaveAttribute(
			"src",
			"/_next/image?url=%2Fwoman-model.png&w=750&q=75"
		);
	});

	it("click link", async () => {
		const user = userEvent.setup();
		render(<Hero />);

		const spyLink = jest.spyOn(user, "click");
		const linkEl = screen.getByRole("link", { name: /shop now/i });

		await user.click(linkEl);

		expect(spyLink).toHaveBeenCalledTimes(1);
	});
});
