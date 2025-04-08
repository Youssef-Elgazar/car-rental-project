import React from "react";

const InfoCard = ({
	title = "Default Title",
	description = "Default Description",
	image = "",
}) => {
	return (
		<div className="w-full rounded-xl shadow-md bg-white p-3">
			{image && (
				<img
					className="w-full h-20 object-contain p-1"
					src={image}
					alt={title}
				/>
			)}
			<div className="p-1">
				<h2 className="text-sm font-semibold text-center truncate">{title}</h2>
			</div>
		</div>
	);
};

export default InfoCard;
