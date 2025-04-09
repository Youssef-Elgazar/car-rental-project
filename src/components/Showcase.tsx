// PopularMakesSection.tsx
import React from "react";

// Card Component (only component we'll use)
const VehicleCard = ({
	title,
	description,
	features,
	price,
	priceNote,
}: {
	title: string;
	description: string;
	features: { text: string; checked: boolean }[];
	price: string;
	priceNote?: string;
}) => (
	<div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
		<h3 className="text-xl font-bold mb-2">{title}</h3>
		<p className="text-gray-300 mb-4">{description}</p>

		<ul className="space-y-2 mb-4">
			{features.map((feature, index) => (
				<li key={index} className="flex items-center">
					{feature.checked ? (
						<span className="text-green-500 mr-2">✓</span>
					) : (
						<span className="text-gray-300 mr-2">○</span>
					)}
					{feature.text}
				</li>
			))}
		</ul>

		<div className="mt-4">
			{priceNote && (
				<p className="text-sm text-gray-400 line-through">{priceNote}</p>
			)}
			<p className="text-2xl font-bold">{price}</p>
			<button className="mt-2 text-blue-600 hover:text-blue-800 font-medium">
				View Details
			</button>
		</div>
	</div>
);

// Main Section (pure JSX/Tailwind)
const Showcase = () => {
	return (
		<section className="w-full p-8 mx-auto bg-[#050B20] text-white	">
			<h1 className="text-3xl font-bold mb-8">Popular Makes</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Card 1 */}
				<VehicleCard
					title="Audi A5 – 2023"
					description="2.0 D5 PowerPulse Momentum 5dr AWD."
					features={[
						{ text: "500 Miles", checked: true },
						{ text: "Petrol", checked: true },
						{ text: "Automatic", checked: true },
					]}
					price="$45,000"
					priceNote="$50,000"
				/>

				{/* Card 2 */}
				<VehicleCard
					title="Audi A4 – 2022"
					description="2.0 D5 PowerPulse Momentum 5dr AWD."
					features={[
						{ text: "150 Miles", checked: true },
						{ text: "Diesel", checked: true },
						{ text: "CVT", checked: true },
					]}
					price="$120,000"
				/>
			</div>
		</section>
	);
};

export default Showcase;
