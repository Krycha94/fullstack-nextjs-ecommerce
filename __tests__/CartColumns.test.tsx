import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CartColumns from "@/components/CartColumns/CartColumns";

describe("CartColumns Component", () => {
	it("renders correctly", () => {
		render(<CartColumns />);

		const textEl = screen.getAllByRole("heading", {
			level: 5,
		});

		expect(textEl).toHaveLength(3);
	});
});
