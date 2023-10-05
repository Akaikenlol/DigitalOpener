import opentable from "../../public/opentable.png";
import thread from "../../public/thread.png";
import promptopia from "../../public/promptopia.png";
import Image from "next/image";

const Gallary = () => {
	return (
		<div className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto text-center mt-20">
			<h1 className="font-bold text-2xl mb-8">Some of my work</h1>
			<div className="w-[100%] h-py-[50px]">
				<div className="bg-black/60 absolute h-[30%] bottom-0" />
				<h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
					Promptopia
				</h1>
				<Image src={promptopia} alt="promptopia" className="block w-[100%]" />
			</div>
			<div className="bg-black/60 absolute h-[30%] bottom-0" />
			<h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
				Opentable
			</h1>
			<Image src={thread} alt="thread" className="block w-[100%]" />
		</div>
	);
};

export default Gallary;
