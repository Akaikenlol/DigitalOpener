"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SwiperWrapper = () => {
	return (
		<div className="w-full max-w-[700px]  bg-white mx-auto h-10">
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				className="w-full project-swiper aspect-video"
			>
				<SwiperSlide className="w-full h-fit flex justify-center items-center relative shadow-2xl rounded-md overflow-hidden">
					<Image
						src={"/opentable1.png"}
						alt="OpenTable"
						className="object-contain"
						fill
					/>
				</SwiperSlide>
				<SwiperSlide className="w-full h-fit flex justify-center items-center relative shadow-2xl rounded-md overflow-hidden">
					<Image
						src={"/promptopia.png"}
						alt="Promptopia"
						className="object-contain"
						fill
					/>
				</SwiperSlide>
				<SwiperSlide className="w-full h-fit flex justify-center items-center relative shadow-2xl rounded-md overflow-hidden">
					<Image
						src={"/thread.png"}
						alt="Thread"
						className="object-contain"
						fill
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SwiperWrapper;
