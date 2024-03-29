import { offer } from "../scripts/data";
import { twJoin } from "tailwind-merge";
import randomKey from "../scripts/randomKey";

export default function Card(offer: offer) {
	return (
		<div
			className={twJoin(
				"flex flex-col bg-white shadow-lg gap-4 rounded-xl p-4 md:flex-row justify-between",
				offer.featured ? "border-l-8 border-accent" : null
			)}>
			<div className="md:flex gap-4">
				<img
					className="max-w-12 aspect-auto -translate-y-8 md:translate-y-0 md:max-w-20 "
					src={"../." + offer.logo}
					alt=""
				/>
				<div className="md:flex md:flex-col gap-1">
					<div className="flex flex-row gap-1 items-center -translate-y-4 md:translate-y-0">
						<h3 className="text-accent font-medium mr-4 md:text-sm">
							{offer.company}
						</h3>
						{offer.new ? (
							<span className="text-sm font-bold text-white bg-accent rounded-full px-3 py-1  md:text-xs">
								NEW!
							</span>
						) : null}
						{offer.featured ? (
							<span className="text-sm font-bold text-white bg-secondary rounded-full px-3 py-1  md:text-xs">
								FEATURED
							</span>
						) : null}
					</div>

					<h2 className="font-bold text-secondary text-md hover:text-accent hover:cursor-pointer">
						{offer.position}
					</h2>

					<ul className="flex flex-row gap-8">
						<li className="text-primary md:text-sm">
							{offer.postedAt}
						</li>
						<li className="text-primary list-disc md:text-sm">
							{offer.contract}
						</li>
						<li className="text-primary list-disc md:text-sm">
							{offer.location}
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:items-center">
				<button className="text-accent bg-background rounded-sm px-2 font-medium py-1 hover:bg-accent hover:cursor-pointer hover:text-white md:h-min  md:text-sm">
					{offer.role}
				</button>
				<button className="text-accent bg-background rounded-sm px-2 font-medium py-1 hover:bg-accent hover:cursor-pointer hover:text-white md:h-min  md:text-sm">
					{offer.level}
				</button>
				{offer.languages.map((lang) => {
					return (
						<button
							className="text-accent bg-background rounded-sm px-2 font-medium py-1 hover:bg-accent hover:cursor-pointer hover:text-white md:h-min md:text-sm"
							key={randomKey()}>
							{lang}
						</button>
					);
				})}
				{offer.tools.map((tool) => {
					return (
						<button
							className="text-accent bg-background rounded-sm px-2 font-medium py-1 hover:bg-accent hover:cursor-pointer hover:text-white md:h-min  md:text-sm"
							key={randomKey()}>
							{tool}
						</button>
					);
				})}
			</div>
		</div>
	);
}
