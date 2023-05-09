export const products = [
	{
		price: 111.11,
		discount: false,
		brand: "new balance",
		stock: 5,
		size: ["L", "XL"],
		description: "desc 1",
		name: "name 1",
		category: "men",
		images: [
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
		],
		reviews: 17,
		stars: 4,
		featured: true,
		id: "Aot8e1OX1Oj7bGRMjLan",
	},
	{
		size: ["S", "XL"],
		images: [
			{
				url: "/products/woman-tshirt-nike-1",
				id: "1",
			},
			{
				url: "/products/woman-tshirt-nike-2",
				id: "2",
			},
			{
				url: "/products/woman-tshirt-nike-3",
				id: "3",
			},
		],
		brand: "nike",
		category: "women",
		discount: true,
		name: "name 2",
		price: 89.99,
		featured: true,
		description: "desc 2",
		stock: 6,
		stars: 5,
		reviews: 84,
		id: "Bg5Yahf5SfFypOKWEdNf",
	},
];

export const cartProducts = [
	{
		id: "bvKOFC6RsKusU1KPxBwtS",
		size: "S",
		amount: 3,
		name: "Adidas T-Shirt Treofil",
		image: "/products/man-tshirt-adidas-3",
		price: 69.99,
		max: 6,
	},
	{
		id: "bvKOFC6RsKusU1KPxBwtM",
		size: "M",
		amount: 4,
		name: "Nike T-Shirt Essential",
		image: "/products/man-sneakers-newbalance-3",
		price: 169.99,
		max: 8,
	},
	{
		id: "bvKOFC6RsKusU1KPxBwtL",
		size: "L",
		amount: 5,
		name: "Adidas SST Track Pants",
		image: "/products/woman-tshirt-nike-3",
		price: 1169.99,
		max: 10,
	},
];
