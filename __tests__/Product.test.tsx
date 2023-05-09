import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { products } from "@/utils/dummyData";
import ProductType from "@/types/ProductType";

import Product from "@/components/Product/Product";

describe("Product Component", () => {
	it("renders correctly", () => {
		render(<Product {...(products[0] as ProductType)} />);

		const imgEl = screen.getByRole("img");
		expect(imgEl).toHaveAttribute(
			"src",
			"/_next/image?url=%2Fproducts%2Fman-sneakers-newbalance-3.jpg&w=1080&q=75"
		);

		const linkEl = screen.getByRole("link", { name: /quick view/i });
		expect(linkEl).toHaveAttribute("href", "/products/Aot8e1OX1Oj7bGRMjLan");

		const priceEl = screen.getByText(/111.11/i);
		expect(priceEl).toHaveTextContent("$111.11");
	});
});
