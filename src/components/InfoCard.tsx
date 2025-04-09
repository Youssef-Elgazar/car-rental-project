import React from "react";

interface FeatureCardProps {
	title: string;
	description: string;
	className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	description,
	className = "",
}) => {
	return (
		<div
			className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all ${className}`}
		>
			{" "}
			<h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default FeatureCard;
