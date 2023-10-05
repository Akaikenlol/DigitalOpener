// "use client";

// import { Swiper, SwiperSlide } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import SwiperCore, {
// 	EffectCoverflow,
// 	Navigation,
// 	Pagination,
// } from "swiper/core";

// import opentable from "../../public/opentable.png";
// import thread from "../../public/thread.png";
// import promptopia from "../../public/promptopia.png";
// import Image from "next/image";

// const Carousel = () => {
// 	return (
// 		<div className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto text-center mt-20">
// 			<h1 className="font-bold text-2xl mb-8">Some of my work</h1>
// 			<Swiper
// 				effect={"coverflow"}
// 				grabCursor={true}
// 				centeredSlides={true}
// 				slidesPerView={"auto"}
// 				loop={true}
// 				coverflowEffect={{
// 					rotate: 0,
// 					stretch: 0,
// 					depth: 100,
// 					modifier: 2.5,
// 					slideShadows: true,
// 				}}
// 				modules={[EffectCoverflow, Navigation, Pagination]}
// 				pagination={{
// 					clickable: true,
// 				}}
// 				className="w-[100%] h-py-[50px]"
// 			>
// 				<SwiperSlide>
// 					<div className="bg-black/60 absolute h-[30%] bottom-0" />
// 					<h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
// 						Thread
// 					</h1>
// 					<Image src={opentable} alt="opentable" className="block w-[100%]" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="bg-black/60 absolute h-[30%] bottom-0" />
// 					<h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
// 						Opentable
// 					</h1>
// 					<Image src={thread} alt="thread" className="block w-[100%]" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="bg-black/60 absolute h-[30%] bottom-0" />
// 					<h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
// 						Promptopia
// 					</h1>
// 					<Image src={promptopia} alt="promptopia" className="block w-[100%]" />
// 				</SwiperSlide>
// 			</Swiper>
// 		</div>
// 	);
// };

// export default Carousel;
