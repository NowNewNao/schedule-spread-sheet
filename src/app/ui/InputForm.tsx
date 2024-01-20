"use client";
import { FC } from "react";

type InputFormProps = {
	label: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputForm: FC<InputFormProps> = ({
	label,
	placeholder,
	value,
	onChange,
}) => (
	<>
		<form>
			<label>{label}</label>
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</form>
	</>
);
