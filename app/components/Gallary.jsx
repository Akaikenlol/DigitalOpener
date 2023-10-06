import opentable1 from "../../public/opentable1.png";
import thread from "../../public/thread.png";
import promptopia from "../../public/promptopia.png";
import Image from "next/image";

const Gallary = () => {
	return (
		<div className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto text-center mt-20 z-20 flex flex-col justify-center items-center">
			<h1 className="text-2xl sm:text-4xl tracking-tight z-20">
				Some Of My Works
			</h1>

			<div className=" mt-10">
				<div className="bg-black/60 absolute h-[30%] bottom-0" />
				<h1 className="absolute text-black font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
					OpenTable
				</h1>
				<Image src={opentable1} alt="opentable" className="block w-[100%]" />
			</div>
		</div>
	);
};

export default Gallary;
