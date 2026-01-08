"use client";

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
import { useState } from "react";
import { Value } from "@radix-ui/react-select";

const AdvanceCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const [inputOp, setInputOp] = useState("");

	const hendleCalculate = () => {};

	const hendleReset = () => {
		setInputOne("");
		setInputTwo("");
		setInputTotal("");
		setInputOp("");
	};

	return (
		<div className="grid grid-cols-3 gap-8">
			<Input
				type="number"
				className="col-span-1"
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
				value={inputOne}
			/>

			<Select
				onValueChange={(Value) => setInputOp(Value)}
				value={inputOp}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="plus">
						<PlusIcon />
					</SelectItem>

					<SelectItem value="minus">
						<MinusIcon />
					</SelectItem>

					<SelectItem value="multiply">
						<X />
					</SelectItem>

					<SelectItem value="divide">
						<DivideIcon />
					</SelectItem>
				</SelectContent>
			</Select>

			<Input
				type="number"
				className="col-span-1"
				placeholder="Number 2"
				onChange={({ target }) => setInputTwo(target.value)}
				value={inputTwo}
			/>

			<Input
				className="col-span-2"
				placeholder="Total"
				disabled
				value={inputTotal}
			/>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === "" || inputOp === ""}
				onClick={hendleCalculate}>
				Calculate
			</Button>
			<Button
				className="col-span-3 cursor-pointer"
				disabled={
					inputOne === "" &&
					inputTwo === "" &&
					inputTotal === "" &&
					inputOp === ""
				}
				variant={"destructive"}
				onClick={hendleReset}>
				Reset
			</Button>
		</div>
	);
};

export default AdvanceCalculator;
