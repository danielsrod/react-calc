import { useState } from "react";
import { Button } from "@/components/ui/button";
import buttonsList from "./buttons-list.json";

export const App = () => {
	const [mathString, setMathString] = useState("");
	const handleButtonsCalc = (character: string) => {
		if (character === "=") {
			setMathString(String(eval(mathString)));
		} else {
			setMathString(mathString + character);
		}
	};
	return (
		<>
			<main className="w-full h-[100vh] bg-gradient-to-r from-fuchsia-600 to-purple-600 flex row justify-center items-center gap-3">
				<div>{/* <p>historic</p> */}</div>
				<div className="w-[350px] h-[420px] flex flex-col justify-center items-center">
					<div className="w-[350px] h-[100px] bg-gradient-to-r from-slate-900 to-slate-900 rounded-tl-md rounded-tr-md text-slate-200 flex justify-end items-end p-4">
						<span className="text-3xl overflow-x-auto overflow-y-hidden tracking-widest">
							{mathString}
						</span>
					</div>
					<div className="w-full h-[320px] bg-slate-800 grid grid-cols-4 gap-1 p-1 rounded-br-md rounded-bl-md">
						{buttonsList.map((button) => (
							<Button
								key={button.id}
								onClick={() => handleButtonsCalc(button.character)}
								className={`text-slate-200 h-12 ${
									button.character === "=" ? "bg-red-700" : "bg-slate-700"
								}`}
							>
								{button.svg ? (
									<img
										className="size-5"
										src={button.svg}
										alt={button.description}
									/>
								) : (
									<span className="text-base">{button.character}</span>
								)}
							</Button>
						))}
					</div>
				</div>
			</main>
		</>
	);
};
