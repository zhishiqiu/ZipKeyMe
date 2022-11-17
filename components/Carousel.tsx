import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type PropType = {
	options?: EmblaOptionsType;
	slides: ReactNode[];
};

export const EmblaCarousel = (props: PropType) => {
	const { options, slides } = props;
	const [emblaRef, embla] = useEmblaCarousel(options);
	const [selectedIndex, setSelectedindex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => embla && embla.scrollTo(index),
		[embla]
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedindex(embla.selectedScrollSnap());
	}, [embla, setSelectedindex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on("select", onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<div className="w-full relative">
			<div className="overflow-hidden relative" ref={emblaRef}>
				<div className="flex flex-col flex-wrap h-80 flex-none">
					{slides.map((slide, index) => (
						<div className="w-full h-full h-80 relative mx-1" key={index}>
							{slide}
						</div>
					))}
				</div>
				<div className="absolute right-2 bottom-2 bg-[#0e0e0e72] rounded-full">
					<div className="flex justify-evenly items-center text-xs w-9 font-semibold">
						<span className="text-white">{selectedIndex + 1}</span>
						<div className="w-[2.05px] h-[2.05px] rounded-full bg-[#ffffffb2]" />
						<span className="text-[#ffffffb2]">{slides.length}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;