import {cls} from "@libs/client/utils";

interface MessageProps {
	message: string;
	reversed?: boolean;
	avatarUrl?: string;
	sendAt?: string;
	isRead?: boolean;
}

export default function Message({message, avatarUrl, reversed, sendAt, isRead}: MessageProps) {
	return (
		<div>
			{/* 채팅 메시지 */}
			<section className={cls(
					"flex items-start space-x-2",
					reversed ? "flex-row-reverse space-x-reverse" : ""
			)}>
				<div className={cls(
					"w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md",
					reversed ? "bg-[#D3D3F4] bg-opacity-80 pl-3" : "bg-[#D3DEDC] bg-opacity-40 pr-3"
				)}>
					<p>{message}</p>
				</div>
			</section>

			{/* 보낸 시간 */}
			<section className={cls(
				"flex",
				reversed ? "flex-row-reverse pr-1" : "pl-1"
			)}>
				<p className={"text-black text-opacity-25 text-sm"}>
					{/*{sendAt}*/}
					15:18 PM
				</p>
			</section>
		</div>
	);
}