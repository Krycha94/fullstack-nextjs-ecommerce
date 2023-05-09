import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "@/components/About/About";

describe("About Component", () => {
	it("renders correctly", () => {
		render(<About />);

		const headingEl = screen.getByRole("heading", {
			name: /about/i,
			level: 2,
		});
		expect(headingEl).toBeInTheDocument();

		const imgEl = screen.getByRole("img");
		expect(imgEl).toHaveAttribute(
			"src",
			"/_next/image?url=%2Fcollection-01.jpg&w=1200&q=75"
		);
	});
});
