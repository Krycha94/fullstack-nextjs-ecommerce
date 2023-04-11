import { Poppins } from "next/font/google";
import "@/styles/globals.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
	title: "Clothing Store",
	description:
		"Discover the latest trends in Krycha store, including women, men and kids clothing. Shop the best outfits for this season at our online store",
	icons: {
		icon: "/cloth-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
