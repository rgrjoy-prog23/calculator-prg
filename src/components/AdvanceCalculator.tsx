import { DivideIcon, MinusIcon, PlusIcon, X } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AdvanceCalculator = () => {
	return (
		<div className="grid grid-cols-3 gap-8">
			<Input
				className="col-span-1"
				placeholder="Number 1"
			/>

			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">
						<PlusIcon />
					</SelectItem>

					<SelectItem value="light">
						<MinusIcon />
					</SelectItem>

					<SelectItem value="light">
						<X />
					</SelectItem>
					<SelectItem value="light">
						<DivideIcon />
					</SelectItem>
				</SelectContent>
			</Select>

			<Input
				className="col-span-1"
				placeholder="Number 2"
			/>

			<Input
				className="col-span-2"
				placeholder="Total"
				disabled
			/>

			<Button className="col-span-1 cursor-pointer">Calculate</Button>
			<Button
				className="col-span-3 cursor-pointer"
				variant={"destructive"}>
				Reset
			</Button>
		</div>
	);
};

export default AdvanceCalculator;
