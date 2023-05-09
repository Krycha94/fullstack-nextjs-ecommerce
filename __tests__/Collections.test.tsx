import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Collections from "@/components/Collections/Collections";

describe("Collections Component", () => {
	it("renders correctly", () => {
		render(<Collections />);

		const headingEl = screen.getByRole("heading", {
			name: /discover collections/i,
			level: 2,
		});
		expect(headingEl).toBeInTheDocument();

		const linkEls = screen.getAllByRole("link", { name: /shop now/i });
		expect(linkEls).toHaveLength(3);

		const imgEls = screen.getAllByRole("img");
		expect(imgEls).toHaveLength(3);
	});

	it("click links", async () => {
		const user = userEvent.setup();
		render(<Collections />);

		const spyLink = jest.spyOn(user, "click");
		const linkEls = screen.getAllByRole("link", { name: /shop now/i });

		await user.click(linkEls[0]);
		await user.click(linkEls[1]);
		await user.click(linkEls[2]);

		expect(spyLink).toHaveBeenCalledTimes(3);
	});
});
