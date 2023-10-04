"use client";

import Image from "next/image";
import blur from "../../public/blur.png";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div className="h-screen w-full bg-[#ecf0f3] relative overflow-y-hidden">
			<Image
				src={blur}
				alt="blur"
				// layout="fill"
				// objectFit="cover"
				quality={100}
				priority
				className="absolute animate-pulse object-fill fill-current "
			/>
			{/* Main Text */}
			<div className="flex flex-col justify-center items-center text-center mx-auto max-w-[1260px] pt-48">
				<h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
					A Software{" "}
					<span className="bg-gradient-to-r from-[#83e3da] to-[#9be8e1] text-transparent bg-clip-text">
						agency
					</span>
				</h1>
				<h1 className="text-5xl sm:text-8xl font-bold z-20">With a twist</h1>
				<h2 className="text-2xl sm:text-4xl mt-4">
					specializing in{" "}
					<Typed
						strings={[
							"web development",
							"mobile development",
							"UI/UX design",
							"branding",
						]}
						typeSpeed={200}
						backSpeed={100}
						loop
					/>{" "}
				</h2>
			</div>
		</div>
	);
};

export default Hero;
