"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	return (
		<div className="h-screen w-full relative scrollbar-none ">
			{/* Main Text */}
			<div className="flex flex-col justify-center items-center text-center mx-auto max-w-[1260px] pt-48">
				<h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
					Junior Web{" "}
					<span className="bg-gradient-to-r from-[#83e3da] to-[#9be8e1] text-transparent bg-clip-text">
						Developer
					</span>
				</h1>
				<h1 className="text-5xl sm:text-8xl font-bold z-20 mt-7">
					With a twist
				</h1>
				<TypeAnimation
					sequence={[
						"specializing in web development",
						1000,
						"specializing in UI/UX design",
						1000,
						"specializing in branding",
						1000,
						"specializing in mobile development",
						1000,
					]}
					wrapper="span"
					speed={50}
					style={{ display: "inline-block" }}
					repeat={Infinity}
					className="text-2xl sm:text-4xl mt-7"
				/>{" "}
				<div className="justify-center items-center  text-center mx-auto pt-7 z-20 ">
					<Link href="/project">
						<button className="bg-black text-white text-2xl rounded-lg px-10 py-5 shadow-lg shadow-black/40 hover:bg-black/70 cursor-pointer ease-in-out duration-150">
							View Project
						</button>
					</Link>
					<p className="text-2xl sm:text-4xl mt-20">
						Junior web dev with a twist, turning code into digital artistry.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
