import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CartIcon from "@/components/CartIcon/CartIcon";
import { CartProvider } from "@/context/CartContext";

describe("CartIcon Component", () => {
	it("renders correctly", () => {
		render(<CartIcon />, { wrapper: CartProvider });

		const link = screen.getByRole("link", {
			name: /0/i,
		});

		expect(link).toHaveAttribute("href", "/cart");
	});
});
