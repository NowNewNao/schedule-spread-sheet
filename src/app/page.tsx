"use client";
import { Input } from "@/app/ui/Input";
import { BRAND_NAME, CREATE_SPREAD_SHEET } from "@/const/const";

export default function Home() {
	return (
		<>
			<h1>{BRAND_NAME}</h1>
			<Input />
			<button>{CREATE_SPREAD_SHEET}</button>
		</>
	);
}
