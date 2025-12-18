import BasicCalculator from "@/components/BasicCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Calculator Prg App",
	description: "Basic off a Calculator Prg App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="grid w-2xs gap-4">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Calculator
					</CardTitle>
				</CardHeader>

				<CardContent>
					<BasicCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
