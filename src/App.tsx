import "./index.css";
import data from "../data.json";
import Card from "./components/Card";
import FilterItem from "./components/FilterItem";
import { useState } from "react";
import randomKey from "./scripts/randomKey";
import { offer } from "./scripts/data";

function App() {
	const [role, setRole] = useState<string>();
	const [level, setLevel] = useState<string>();
	const [langs, setLangs] = useState<string[]>([]);
	const [tools, setTools] = useState<string[]>([]);

	return (
		<>
			<header className="bg-accent py-8  px-3 flex lg:px-[12vw] md:py-16 relative">
				{role || level || langs.length > 0 || tools.length > 0 ? (
					<div className="bg-white p-4 flex translate-y-10 shadow-lg rounded-md  justify-between absolute bottom-0 left-4 right-4 md:right-[12vw] md:left-[12vw]">
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
													langs.filter(
														(deleteLang) =>
															deleteLang !== lang
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
												onDelete={() => {
													setTools(
														langs.filter(
															(deleteTool) =>
																deleteTool !==
																tool
														)
													);
												}}
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
				{data.map((card: offer) => {
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
					//IF THERE IS ONLY ONE LANG
					if (
						langs.length === 1 &&
						!card.languages.some((lang) => langs.includes(lang))
					) {
						return null;
					}

					if (
						langs.length >= 2 &&
						!card.languages.every((lang) => langs.includes(lang))
					) {
						return null;
					}

					//IF THERE IS ONLY ONE TOOL
					if (
						tools.length === 1 &&
						!card.tools.some((tool) => tools.includes(tool))
					) {
						return null;
					}

					if (
						tools.length >= 2 &&
						!card.tools.every((tool) => tools.includes(tool))
					) {
						return null;
					}
					//IF THERE IS ROLE
					if (role && card.role !== role) {
						return null;
					}

					//IF THERE IS LEVEL
					if (level && card.level !== level) {
						return null;
					}

					//DISPLAYING RESULTS
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
				})}
			</main>
		</>
	);
}

export default App;
