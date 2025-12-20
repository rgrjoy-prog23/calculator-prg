import AdvanceCalculator from "@/components/AdvanceCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance | Calculator Prg App",
	description: "Advance of a Calculator Prg App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="grid gap-4">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Advance Calculator
					</CardTitle>
				</CardHeader>

				<CardContent>
					<AdvanceCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
