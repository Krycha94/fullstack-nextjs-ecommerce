import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
	title: "Krycha Store - Home",
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
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
