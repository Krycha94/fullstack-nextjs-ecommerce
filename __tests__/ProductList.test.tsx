import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { products } from "@/utils/dummyData";
import ProductType from "@/types/ProductType";

import ProductList from "@/components/ProductList/ProductList";

describe("ProductList Component", () => {
	it("renders products correctly", () => {
		render(<ProductList products={products as ProductType[]} />);

		const productItems = screen.getAllByRole("article");
		expect(productItems).toHaveLength(products.length);
	});

	it("dont renders products when products are no passed", () => {
		render(<ProductList products={[]} />);

		const productItems = screen.queryAllByRole("article");
		expect(productItems).toHaveLength(0);
	});

	it("renders paragraph message when products are no passed", () => {
		render(<ProductList products={[]} />);

		const text = screen.getByText(/sorry no products matched your search/i);
		expect(text).toHaveTextContent(/sorry no products matched your search/i);
	});
});
