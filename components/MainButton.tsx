import React from "react";

interface MainButtonProps {
	children: React.ReactNode;
	text: string;
}

export default function MainButton({children, text}: MainButtonProps) {
	return (
		<button>
			<div className={"flex justify-center items-center aspect-square rounded-3xl bg-pantone h-20 drop-shadow-lg"}>
				{children}
			</div>
			<p className={"mt-2"}>
				{text}
			</p>
		</button>
	)
}