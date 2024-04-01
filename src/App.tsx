import "./index.css";
import data from "../data.json";
import Card from "./components/Card";
import FilterItem from "./components/FilterItem";
import { useState } from "react";
import randomKey from "./scripts/randomKey";

function App() {
	const [role, setRole] = useState<string>();
	const [level, setLevel] = useState<string>();
	const [langs, setLangs] = useState<string[]>([]);
	const [tools, setTools] = useState<string[]>([]);

	return (
		<>
			<header className="bg-accent py-8 px-3 flex lg:px-[12vw]">
				{role || level || !langs || !tools ? (
					<div className="bg-white p-4 flex translate-y-20 shadow-lg rounded-md min-w-[100%] justify-between">
						<div className="flex flex-wrap gap-4">
							{role ? (
								<FilterItem
									key={randomKey()}
									onDelete={() => setRole(undefined)}
									item={role}
								/>
							) : null}
							{level ? (
								<FilterItem
									key={randomKey()}
									onDelete={() => setLevel(undefined)}
									item={level}
								/>
							) : null}
							{langs
								? langs.map((lang) => {
										return (
											<FilterItem
												key={randomKey()}
												onDelete={() =>
													setLangs(
														langs.filter(
															(deleteLang) =>
																deleteLang !==
																lang
														)
													)
												}
												item={lang}
											/>
										);
								  })
								: null}
							{tools
								? tools.map((tool) => {
										return (
											<FilterItem
												key={randomKey()}
												onDelete={() =>
													setTools(
														langs.filter(
															(deleteTool) =>
																deleteTool !==
																tool
														)
													)
												}
												item={tool}
											/>
										);
								  })
								: null}
						</div>
						<button
							className="text-primary font-bold text-sm hover:cursor-pointer hover:text-accent"
							onClick={() => {
								setRole(undefined);
								setLevel(undefined);
								setLangs([]);
								setTools([]);
							}}>
							Clear
						</button>
					</div>
				) : null}
			</header>
			<main className="flex flex-col px-3 gap-8 my-24 lg:px-[12vw]">
				{data.map((card) => {
					let canDisplay: boolean;
					if (!role && langs && !level && tools) {
						canDisplay = true;
						return (
							<Card
								offer={card}
								onRole={(role) => setRole(role)}
								onLevel={(level) => setLevel(level)}
								onLang={(lang) => {
									if (langs.includes(lang)) return;
									else setLangs([...langs, lang]);
								}}
								onTool={(tool) => {
									if (tools.includes(tool)) return;
									else setTools([...tools, tool]);
								}}
								key={randomKey()}
							/>
						);
					} else if (role || level || !langs || !tools) {
						console.log("opcja druga");
						if (card.role === role) {
							return (
								<Card
									offer={card}
									onRole={(role) => setRole(role)}
									onLevel={(level) => setLevel(level)}
									onLang={(lang) => {
										if (langs.includes(lang)) return;
										else setLangs([...langs, lang]);
									}}
									onTool={(tool) => {
										if (tools.includes(tool)) return;
										else setTools([...tools, tool]);
									}}
									key={randomKey()}
								/>
							);
						}

						// card.role === role ? (
						// 	<Card
						// 		offer={card}
						// 		onRole={(role) => setRole(role)}
						// 		onLevel={(level) => setLevel(level)}
						// 		onLang={(lang) => {
						// 			if (langs.includes(lang)) return;
						// 			else setLangs([...langs, lang]);
						// 		}}
						// 		onTool={(tool) => {
						// 			if (tools.includes(tool)) return;
						// 			else setTools([...tools, tool]);
						// 		}}
						// 		key={randomKey()}
						// 	/>
						// ) : null;
					}
				})}
			</main>
		</>
	);
}

export default App;
