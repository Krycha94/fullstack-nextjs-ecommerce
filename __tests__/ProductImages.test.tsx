import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductImages from "@/components/ProductImages/ProductImages";

describe("ProductImages Component", () => {
	const images = [
		{
			url: "/products/man-sneakers-newbalance-1",
			id: "1",
		},
		{
			id: "2",
			url: "/products/man-sneakers-newbalance-2",
		},
		{
			id: "3",
			url: "/products/man-sneakers-newbalance-3",
		},
	];

	it("renders correctly", () => {
		render(<ProductImages images={images} />);

		const imageEls = screen.getAllByRole("img");

		expect(imageEls).toHaveLength(4);
		expect(imageEls).not.toHaveLength(0);
	});
});
