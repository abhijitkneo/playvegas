import type { Metadata } from "next";
import "../styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
	title: "PlayVegas",
	description: "Betting App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <body className="d-flex flex-column min-vh-100"></body> */}
			<body className="d-flex flex-column min-vh-100">
				<Header />

				<main className="flex-grow-1 py-3">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
