import { describe } from "node:test";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	return (
		<div className="grid grid-cols-4 gap-8">
			<Input
				className="col-span-2"
				placeholder="Number 1"
			/>
			<Input
				className="col-span-2"
				placeholder="Number 2"
			/>
			<Input
				className="col-span-4"
				placeholder="Total"
				disabled
			/>

			<Button className="col-span-1 cursor-pointer">Add</Button>
			<Button className="col-span-1 cursor-pointer">Subtract</Button>
			<Button className="col-span-1 cursor-pointer">Multiply</Button>
			<Button className="col-span-1 cursor-pointer">Divide</Button>
			<Button
				className="col-span-4 cursor-pointer"
				variant={"destructive"}>
				Reset
			</Button>
		</div>
	);
};

export default BasicCalculator;
