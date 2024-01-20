import { VMModel } from "@/app/store/type";
import { useState } from "react";

type InputState = {
	courseName: string;
	numberOfPeople: string;
	startDate: string;
	period: string;
	dayOfWeek: string;
	startTime: string;
	endTime: string;
};

type InputAction = {
	handleCourseName: (name: string) => void;
	handleNumberOfPeople: (num: string) => void;
	handleStartDate: (date: string) => void;
	handlePeriod: (period: string) => void;
	handleDayOfWeek: (day: string) => void;
	handleStartTime: (time: string) => void;
	handleEndTime: (time: string) => void;
};

export const useInputVM: VMModel<InputState, InputAction> = () => {
	const [courseName, setCourseName] = useState("");
	const [numberOfPeople, setNumberOfPeople] = useState("");
	const [startDate, setStartDate] = useState("");
	const [period, setPeriod] = useState("");
	const [dayOfWeek, setDayOfWeek] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");

	return {
		state: {
			courseName,
			numberOfPeople,
			startDate,
			period,
			dayOfWeek,
			startTime,
			endTime,
		},
		action: {
			handleCourseName: (name: string) => setCourseName(name),
			handleNumberOfPeople: (number: string) => setNumberOfPeople(number),
			handleStartDate: (date: string) => setStartDate(date),
			handlePeriod: (period: string) => setPeriod(period),
			handleDayOfWeek: (day: string) => setDayOfWeek(day),
			handleStartTime: (time: string) => setStartTime(time),
			handleEndTime: (time: string) => setEndTime(time),
		},
	};
};
