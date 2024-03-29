import "./index.css";
import data from "../data.json";
import Card from "./components/Card";

function App() {
	return (
		<>
			<header className="bg-accent py-8"></header>
			<main className="flex flex-col px-3 gap-8 my-8">
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
