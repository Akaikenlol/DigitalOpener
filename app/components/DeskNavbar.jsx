"use client";

import { SlArrowUp } from "react-icons/sl";
import Link from "next/link";

const DeskNavbar = () => {
	return (
		<div className="fixed justify-center items-center text-center hidden sm:flex w-full z-40 bottom-10">
			<div className="bg-black flex items-center text-white rounded-2xl mx-auto max-w-[660px] px-3 py-2">
				<ul className="flex gap-10 justify-around text-xl items-center">
					<li className="rounded-2xl bg-gray-700 p-2 flex-nowrap">
						<SlArrowUp className="text-2xl mx-auto cursor-pointer" />
					</li>
					<Link href="/portfolio">
						<li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-xl ease-in-out duration-500 cursor-pointer">
							Portfolio
						</li>
					</Link>
					<Link href="/pricing">
						<li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-xl ease-in-out duration-500 cursor-pointer">
							Pricing
						</li>
					</Link>
					<Link href="/faq">
						<li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-xl ease-in-out duration-500 cursor-pointer">
							FAQ
						</li>
					</Link>
					<Link href="/schedule">
						<li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-xl ease-in-out duration-500 cursor-pointer">
							Book A Call
						</li>
					</Link>
					<Link href="/login">
						<li className="bg-gray-700 rounded-2xl tracking-tight p-2">
							Login
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default DeskNavbar;
