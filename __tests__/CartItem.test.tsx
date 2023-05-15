import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CartItem from "@/components/CartItem/CartItem";
import { CartProvider } from "@/context/CartContext";

describe("CartItem Component", () => {
	it("renders correctly", () => {
		render(
			<CartItem
				id="2fxUCASCv3ZpyJgFZQfWM"
				image="/products/woman-tshirt-adidas-3"
				name="Adidas T-Shirt Treofil Tee"
				size="M"
				price={39.99}
				amount={2}
				max={4}
			/>,
			{ wrapper: CartProvider }
		);

		const heading = screen.getByRole("heading", {
			name: /adidas t\-shirt treofil tee/i,
		});
		const size = screen.getByText(/size: m/i);
		const price = screen.getByRole("heading", { name: /\$39\.99/i });
		const subtotal = screen.getByRole("heading", { name: /\$79\.98/i });

		expect(heading).toBeInTheDocument();
		expect(size).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(subtotal).toBeInTheDocument();
	});
});
