import { useState } from "react";
import { Button } from "@/components/ui/button";
import buttonsList from "./buttons-list.json";

const mathOpSpecialList = buttonsList
	.filter((item) => {
		return item.mathOpSpecial === true;
	})
	.map((item) => item.handler);

export const App = () => {
	const [mathString, setMathString] = useState<string[]>([]);
	const autoScrollbarLeft = () => {
		const scrollbar = document.querySelector(".scrollbar-reference");
		// a little trick to make scrollbar x axis always on left and "reactive"
		setTimeout(() => {
			if (scrollbar) scrollbar.scrollLeft = scrollbar.scrollWidth + 100;
		}, 1);
	};
	const autoEval = (expression: string) => {
		return Function(`return ${expression}`)();
	};
	const handleButtonsCalc = (handler: string) => {
		if (handler === "=") {
			if (mathOpSpecialList.includes(mathString.at(-1) || "") === false) {
				const stringMath = mathString.join("");
				setMathString([String(autoEval(stringMath))]);
			}
		} else if (handler === "del") {
			const newMathString = mathString;
			newMathString.pop();
			setMathString([...newMathString]);
		} else if (handler === "C") {
			setMathString([]);
		} else {
			if (
				handler === mathString.at(-1) &&
				mathOpSpecialList.includes(handler)
			) {
				console.log("special charactere in last input");
			} else {
				if (
					mathString.filter((item) => item === handler).length > 0 &&
					mathOpSpecialList.includes(handler)
				) {
					console.log("special charactere only 1 time in argument");
				} else {
					setMathString([...mathString, handler]);
					autoScrollbarLeft();
				}
			}
		}
	};
	return (
		<>
			<main className="w-full h-[100vh] bg-gradient-to-r from-fuchsia-600 to-purple-600 flex row justify-center items-center gap-3">
				<div>{/* <p>historic</p> */}</div>
				<div className="w-[350px] h-[420px] flex flex-col justify-center items-center">
					<div className="w-[350px] h-[100px] bg-gradient-to-r from-slate-900 to-slate-800 rounded-tl-md rounded-tr-md text-slate-200 flex justify-end items-end p-4">
						<span className="scrollbar-reference text-3xl overflow-y-hidden tracking-widest overflow-x-hidden hover:overflow-x-scroll">
							{mathString.join("")}
						</span>
					</div>
					<div className="w-full h-[320px] bg-slate-800 grid grid-cols-4 gap-1 p-1 rounded-br-md rounded-bl-md">
						{buttonsList.map((button) => (
							<Button
								key={button.id}
								onClick={() => handleButtonsCalc(button.handler)}
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
