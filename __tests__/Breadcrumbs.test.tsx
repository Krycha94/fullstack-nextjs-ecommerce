import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

describe("Breadcrumbs Component", () => {
	it("renders correctly when title is passed", () => {
		render(<Breadcrumbs title="test" />);

		const headingEl = screen.getByRole("heading", {
			name: /test/i,
			level: 3,
		});
		expect(headingEl).toBeInTheDocument();
	});

	it("renders 2 links when product is passed", () => {
		render(<Breadcrumbs title="test" product={true} />);

		const linkEls = screen.getAllByRole("link");
		expect(linkEls).toHaveLength(2);
	});

	it("does not render 1 link when product is passed", () => {
		render(<Breadcrumbs title="test" product={true} />);

		const linkEls = screen.getAllByRole("link");
		expect(linkEls).not.toHaveLength(1);
	});
});
