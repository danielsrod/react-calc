import { Button } from "@/components/ui/button";

import buttonsList from "./buttons-list.json";

export const App = () => {
	return (
		<>
			<main className="w-full h-[100vh] bg-gradient-to-r from-fuchsia-600 to-purple-600 flex row justify-center items-center gap-3">
				<div>
					<p>historic</p>
				</div>
				<div className="w-[350px] h-[420px] flex flex-col justify-center items-center">
					<div className="w-full h-[100px] bg-slate-400">Visor</div>
					<div className="w-full h-[320px] bg-slate-800 grid grid-cols-4 gap-1 p-1">
						{buttonsList.map((button) => (
							<Button
								key={button.id}
								className="text-slate-200 bg-slate-700 h-12"
							>
								{button.character && (
									<span className="text-base">{button.character}</span>
								)}
								{button.svg && (
									<img
										className="size-5"
										src={button.svg}
										alt={button.description}
									/>
								)}
							</Button>
						))}
					</div>
				</div>
			</main>
		</>
	);
};
