import "./index.css";
import data from "../data.json";
import Card from "./components/Card";
import FilterItem from "./components/FilterItem";
import { Component, useState } from "react";
import randomKey from "./scripts/randomKey";
import { offer } from "./scripts/data";

function App() {
	const [role, setRole] = useState<string>();
	const [level, setLevel] = useState<string>();
	const [langs, setLangs] = useState<string[]>([]);
	const [tools, setTools] = useState<string[]>([]);
	// let canDisplay: boolean;
	let cardsToDisplay: any = [];
	function filteringResults() {
		cardsToDisplay = data;

		if (!role && langs.length === 0 && !level && tools.length === 0) {
			data.forEach((card) => {
				cardsToDisplay.push(card);
			});
		}
		// if (role) {
		// 	data.forEach((card) => {
		// 		if (card.role !== role) {
		// 			// cardsToDisplay.pop(card);
		// 		} else {
		// 			return null;
		// 		}
		// 	});
		// }

		// if (level) {
		// 	data.forEach((card) => {
		// 		if (card.level !== level) {
		// 			// cardsToDisplay.pop(card);
		// 		} else {
		// 			return null;
		// 		}
		// 	});
		// }

		// if (level && card.level !== level) {
		// 	return null;
		// }
	}
	filteringResults();
	console.log(cardsToDisplay);

	return (
		<>
			<header className="bg-accent py-8 px-3 flex lg:px-[12vw]">
				{role || level || langs.length > 0 || tools.length > 0 ? (
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
												onDelete={() => {
													console.log(
														langs.filter(
															(deleteLang) =>
																deleteLang !==
																lang
														)
													);
													setLangs(
														langs.filter(
															(deleteLang) =>
																deleteLang !==
																lang
														)
													);
												}}
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
				{cardsToDisplay.map((card: offer) => {
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
				})}
				{/* {data.map((card) => {
					//NO FILTERS SO EVERYTHING GOERS THROUGH

					if (
						!role &&
						langs.length === 0 &&
						!level &&
						tools.length === 0
					) {
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
					if (langs.length > 0 && tools.length > 0) {
						langs.map((lang) => {
							if (!card.languages.includes(lang)) {
								tools.map((tool) => {
									if (card.tools.includes(tool)) {
									} else {
										return null;
									}
								});
							} else {
								return null;
							}
						});
					}
					if (langs.length === 0 && tools.length > 0) {
						tools.forEach((tool) => {
							if (card.tools.includes(tool)) {
							} else {
								return null;
								canDisplay = true;
							}
						});
					}

					if (langs.length > 0 && tools.length === 0) {
						langs.map((lang) => {
							if (card.languages.includes(lang)) {
							} else {
								return null;
								canDisplay = true;
							}
						});
					}
					if (langs.length === 0 && tools.length === 0) {
						canDisplay = true;
					}
					//IF THERE'S A ROLE AND ITS NOT MATCHING RETURN
					//ROLE CHECKHED
					if (role && card.role !== role) {
						return null;
					}

					//IF THERE'S A LEVEL AND ITS NOT MATCHING RETURN
					//ROLE AND LEVEL CHECKED
					if (level && card.level !== level) {
						return null;
					}
					//IF THERE'S A LEVEL AND ITS NOT MATCHING RETURN
					//ALL CHECKED

					//IF THERE ARE ONLY LANGS

					//IF THERE ARE ONLY TOOLS

					//IF THERE ARE BOTH

					return (
						<Card
							offer={card}
							onRole={(role) => setRole(role)}
							onLevel={(level) => setLevel(level)}
							onLang={(lang) => {
								if (langs.includes(lang)) return;
								else {
									setLangs([...langs, lang]);
								}
							}}
							onTool={(tool) => {
								if (tools.includes(tool)) return;
								else {
									setTools([...tools, tool]);
								}
							}}
							key={randomKey()}
						/>
					);

					//IF THERE ARE LANGS
					// if (langs.length > 0) {
					// 	langs.map((lang) => {
					// 		if (!card.languages.includes(lang)) {
					// 			// console.log(card.languages);
					// 			return null;
					// 		} else if (tools.length > 0) {
					// 			tools.map((tool) => {
					// 				if (!card.tools.includes(tool)) {
					// 					return null;
					// 				} else {
					// 					return (
					// 						<Card
					// 							offer={card}
					// 							onRole={(role) => setRole(role)}
					// 							onLevel={(level) =>
					// 								setLevel(level)
					// 							}
					// 							onLang={(lang) => {
					// 								console.log(
					// 									lang + " testowane"
					// 								);
					// 								if (langs.includes(lang))
					// 									return;
					// 								else {
					// 									console.log(
					// 										lang + " sprawdzone"
					// 									);
					// 									setLangs([
					// 										...langs,
					// 										lang,
					// 									]);
					// 								}
					// 							}}
					// 							onTool={(tool) => {
					// 								console.log(
					// 									tool + " testowane"
					// 								);

					// 								if (tools.includes(tool))
					// 									return;
					// 								else {
					// 									console.log(
					// 										tool + " sprawdzone"
					// 									);
					// 									setTools([
					// 										...tools,
					// 										tool,
					// 									]);
					// 								}
					// 							}}
					// 							key={randomKey()}
					// 						/>
					// 					);
					// 				}
					// 			});
					// 		}
					// 	});
					// }
					// if (tools.length > 0) {
					// 	tools.map((tool) => {
					// 		if (!card.tools.includes(tool)) {
					// 			return null;
					// 		} else if (langs.length > 0) {
					// 			langs.map((lang) => {
					// 				if (!card.languages.includes(lang)) {
					// 					return null;
					// 				} else {
					// 					return (
					// 						<Card
					// 							offer={card}
					// 							onRole={(role) => setRole(role)}
					// 							onLevel={(level) =>
					// 								setLevel(level)
					// 							}
					// 							onLang={(lang) => {
					// 								console.log(
					// 									lang + " testowane"
					// 								);
					// 								if (langs.includes(lang))
					// 									return;
					// 								else {
					// 									console.log(
					// 										lang + " sprawdzone"
					// 									);
					// 									setLangs([
					// 										...langs,
					// 										lang,
					// 									]);
					// 								}
					// 							}}
					// 							onTool={(tool) => {
					// 								console.log(
					// 									tool + " testowane"
					// 								);

					// 								if (tools.includes(tool))
					// 									return;
					// 								else {
					// 									console.log(
					// 										tool + " sprawdzone"
					// 									);
					// 									setTools([
					// 										...tools,
					// 										tool,
					// 									]);
					// 								}
					// 							}}
					// 							key={randomKey()}
					// 						/>
					// 					);
					// 				}
					// 			});
					// 		}
					// 	});
					// }
				})} */}
			</main>
		</>
	);
}

export default App;
