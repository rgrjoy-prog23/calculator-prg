"use client";

import { describe } from "node:test";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import { useState } from "react";

const BasicCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const hendleAdd = () => {};
	const hendleSubtract = () => {};
	const hendleMultiply = () => {};
	const hendleDivide = () => {};
	const hendleReset = () => {};

	return (
		<div className="grid grid-cols-4 gap-8">
			<Input
				className="col-span-2"
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
				value={inputOne}
			/>
			<Input
				className="col-span-2"
				placeholder="Number 2"
				onClick={hendleSubtract}
				onChange={({ target }) => setInputTwo(target.value)}
				value={inputTwo}
			/>
			<Input
				className="col-span-4"
				placeholder="Total"
				onClick={hendleMultiply}
				onChange={({ target }) => setInputTotal(target.value)}
				value={inputTotal}
				disabled
			/>

			<Button
				className="col-span-1 cursor-pointer"
				onClick={hendleAdd}>
				Add
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				onClick={hendleSubtract}>
				Subtract
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				onClick={hendleMultiply}>
				Multiply
			</Button>
			<Button
				className="col-span-1 cursor-pointer"
				onClick={hendleDivide}>
				Divide
			</Button>
			<Button
				className="col-span-4 cursor-pointer"
				variant={"destructive"}
				onClick={hendleReset}>
				Reset
			</Button>
		</div>
	);
};

export default BasicCalculator;
