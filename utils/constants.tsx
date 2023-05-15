import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const navLinks = [
	{
		id: 1,
		url: "/",
		text: "home",
	},
	{
		id: 2,
		url: "/about",
		text: "about",
	},
	{
		id: 3,
		url: "/products",
		text: "products",
	},
];

export const socials = [
	{
		id: 1,
		address: "https://www.facebook.com",
		icon: <FaFacebook />,
		name: "facebook",
	},
	{
		id: 2,
		address: "https://www.twitter.com",
		icon: <FaTwitter />,
		name: "twitter",
	},
	{
		id: 3,
		address: "https://www.instagram.com",
		icon: <FaInstagram />,
		name: "instagram",
	},
];
