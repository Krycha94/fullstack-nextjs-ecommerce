import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CartContent from "@/components/CartContent/CartContent";
import { CartProvider } from "@/context/CartContext";

describe("CartContent Component", () => {
	it("renders correctly", () => {
		render(<CartContent />, { wrapper: CartProvider });

		const textEl = screen.getByRole("heading", {
			name: /your cart is empty!/i,
		});

		expect(textEl).toBeInTheDocument();
	});
});
