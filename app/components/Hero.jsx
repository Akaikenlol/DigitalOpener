"use client";

import Image from "next/image";
import blur from "../../public/blur.png";
import blur2 from "../../public/blur2.png";
import blur3 from "../../public/blur3.png";
import Typed from "react-typed";
import Link from "next/link";
import Carousel from "./Carousel";
import Gallary from "./Gallary";

const Hero = () => {
	return (
		<div className="h-screen w-full bg-[#ecf0f3] relative overflow-y-hidden">
			<Image
				src={blur3}
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
					Junior Web{" "}
					<span className="bg-gradient-to-r from-[#83e3da] to-[#9be8e1] text-transparent bg-clip-text">
						Developer
					</span>
				</h1>
				<h1 className="text-5xl sm:text-8xl font-bold z-20 mt-7">
					With a twist
				</h1>
				<h2 className="text-2xl sm:text-4xl mt-7">
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
