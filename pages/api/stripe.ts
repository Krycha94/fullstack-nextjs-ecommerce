import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import CartItemType from "@/types/CartItemType";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
	apiVersion: "2022-11-15",
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const cart = req.body;

		try {
			const params: Stripe.Checkout.SessionCreateParams = {
				submit_type: "pay",
				mode: "payment",
				payment_method_types: ["card"],
				billing_address_collection: "auto",
				shipping_options: [{ shipping_rate: "shr_1N2vr4Gi1tQMicEcVyxwnW2T" }],
				line_items: cart.map((item: CartItemType) => {
					return {
						price_data: {
							currency: "usd",
							product_data: {
								name: item.name,
							},
							unit_amount: Math.ceil(item.price * 100),
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
							maximum: item.max,
						},
						quantity: item.amount,
					};
				}),
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/canceled`,
			};

			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create(params);

			res.status(200).json(session);
		} catch (err) {
			res.status((err as any).statusCode || 500).json((err as any).message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
