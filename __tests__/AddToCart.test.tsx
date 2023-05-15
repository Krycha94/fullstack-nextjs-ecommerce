import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { products } from "@/utils/dummyData";
import ProductType from "@/types/ProductType";

import { CartProvider } from "@/context/CartContext";
import AddToCart from "@/components/AddToCart/AddToCart";

describe("AddToCart Component", () => {
	it("renders correctly", () => {
		render(<AddToCart product={products[0] as ProductType} />, {
			wrapper: CartProvider,
		});

		const amount = screen.getByText(/1/i);

		expect(amount).toBeInTheDocument();
	});

	it("click btn", async () => {
		const user = userEvent.setup();
		render(<AddToCart product={products[0] as ProductType} />, {
			wrapper: CartProvider,
		});

		const spyBtn = jest.spyOn(user, "click");
		const btn = screen.getByRole("button", { name: /add to cart/i });

		await user.click(btn);

		expect(spyBtn).toHaveBeenCalledTimes(1);
	});
});
