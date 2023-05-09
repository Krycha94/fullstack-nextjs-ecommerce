import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { products } from "@/utils/dummyData";
import ProductType from "@/types/ProductType";

import PopularProducts from "@/components/PopularProducts/PopularProducts";

describe("PopularProducts Component", () => {
	beforeEach(() => {
		// IntersectionObserver isn't available in test environment, copied from stackoverflow
		const mockIntersectionObserver = jest.fn();
		mockIntersectionObserver.mockReturnValue({
			observe: () => null,
			unobserve: () => null,
			disconnect: () => null,
		});
		window.IntersectionObserver = mockIntersectionObserver;
	});

	it("renders products correctly", () => {
		render(<PopularProducts products={products as ProductType[]} />);

		const productItems = screen.getAllByRole("article");
		expect(productItems).toHaveLength(products.length);
	});

	it("renders products not correctly", () => {
		render(<PopularProducts products={[]} />);

		const productItems = screen.queryAllByRole("article");
		expect(productItems).toHaveLength(0);
	});
});
