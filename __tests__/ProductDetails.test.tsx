import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductType from "@/types/ProductType";
import { products } from "@/utils/dummyData";

import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { CartProvider } from "@/context/CartContext";

describe("ProductDetails Component", () => {
	it("renders correctly", () => {
		render(<ProductDetails product={products[0] as ProductType} />, {
			wrapper: CartProvider,
		});

		const heading = screen.getByRole("heading", {
			level: 2,
			name: /name 1/i,
		});
		const price = screen.getByText(/111.11/i);

		expect(heading).toBeInTheDocument();
		expect(price).toBeInTheDocument();
	});
});
