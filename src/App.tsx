import "./index.css";
import data from "../data.json";
import Card from "./components/Card";
import FilterItem from "./components/FilterItem";

function App() {
	return (
		<>
			<header className="bg-accent py-8 px-3 flex lg:px-[12vw]">
				<div className="bg-white p-4 flex translate-y-20 shadow-lg rounded-md min-w-[100%] justify-between">
					<div className="flex flex-wrap gap-4">
						<FilterItem item="Junior" />
						<FilterItem item="JavaScript" />
						<FilterItem item="CSS" />
						<FilterItem item="Frontend" />
					</div>
					<button className="text-primary font-bold text-sm hover:cursor-pointer hover:text-accent">
						Clear
					</button>
				</div>
			</header>
			<main className="flex flex-col px-3 gap-8 my-24 lg:px-[12vw]">
				{data.map((card) => {
					return (
						<Card
							company={card.company}
							new={card.new}
							featured={card.featured}
							position={card.position}
							role={card.role}
							level={card.level}
							postedAt={card.postedAt}
							id={card.id}
							logo={card.logo}
							languages={card.languages}
							tools={card.tools}
							contract={card.contract}
							location={card.location}
							key={card.id}
						/>
					);
				})}
			</main>
		</>
	);
}

export default App;
