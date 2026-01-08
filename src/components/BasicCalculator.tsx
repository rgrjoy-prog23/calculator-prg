"use client";

import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import { useState } from "react";

const BasicCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const hendleAdd = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne + numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const hendleSubtract = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne - numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const hendleMultiply = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne * numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const hendleDivide = () => {
		const numberOne = parseInt(inputOne);
		const numberTwo = parseInt(inputTwo);

		const total = numberOne / numberTwo;

		setInputTotal(total.toString());

		setInputOne("");
		setInputTwo("");
	};

	const hendleReset = () => {
		setInputOne("");
		setInputTwo("");
		setInputTotal("");
	};

	return (
		<div className="grid grid-cols-4 gap-8">
			<Input
				type="number"
				placeholder="Number 1"
				className="col-span-2"
				onChange={({ target }) => setInputOne(target.value)}
				value={inputOne}
			/>
			<Input
				type="number"
				placeholder="Number 2"
				className="col-span-2"
				onClick={hendleSubtract}
				onChange={({ target }) => setInputTwo(target.value)}
				value={inputTwo}
			/>
			<Input
				placeholder="Total"
				type="number"
				className="col-span-4"
				onClick={hendleMultiply}
				// onChange={({ target }) => setInputTotal(target.value)}
				value={inputTotal}
				disabled
			/>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={hendleAdd}>
				Add
			</Button>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={hendleSubtract}>
				Subtract
			</Button>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={hendleMultiply}>
				Multiply
			</Button>

			<Button
				className="col-span-1 cursor-pointer"
				disabled={inputOne === "" || inputTwo === ""}
				onClick={hendleDivide}>
				Divide
			</Button>

			<Button
				className="col-span-4 cursor-pointer"
				disabled={inputOne === "" && inputTwo === "" && inputTotal === ""}
				variant={"destructive"}
				onClick={hendleReset}>
				Reset
			</Button>
		</div>
	);
};

export default BasicCalculator;
