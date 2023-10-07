import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import DeskNavbar from "./components/DeskNavbar";
import Image from "next/image";
import ExeLenis from "./components/UseLenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} scrollbar-none`}>
				<ExeLenis>
					<Navbar />
					<div className="w-full h-[100vh] fixed ">
						<Image
							src={"/blur3.png"}
							alt="blur"
							quality={100}
							priority
							fill
							className="absolute animate-pulse object-fill fill-current"
						/>
					</div>
					<DeskNavbar />
					<div className="pb-60"> {children}</div>
				</ExeLenis>
			</body>
		</html>
	);
}
