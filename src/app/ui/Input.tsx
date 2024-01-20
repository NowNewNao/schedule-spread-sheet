"use client";

import { useInputVM } from "@/app/store/inputVM";
import { InputForm } from "@/app/ui/InputForm";
import { FC } from "react";

export const Input: FC = () => {
	const { state, action } = useInputVM();
	const {
		courseName,
		numberOfPeople,
		startDate,
		period,
		dayOfWeek,
		startTime,
		endTime,
	} = state;

	return (
		<>
			<InputForm
				label="コース名"
				placeholder="コース名を入力"
				value={courseName}
				onChange={(e) => action.handleCourseName(e.target.value)}
			/>
			<InputForm
				label="人数"
				placeholder="人数を入力"
				value={numberOfPeople}
				onChange={(e) => action.handleNumberOfPeople(e.target.value)}
			/>
			<InputForm
				label="開始日"
				placeholder="開始日を入力"
				value={startDate}
				onChange={(e) => action.handleStartDate(e.target.value)}
			/>
			<InputForm
				label="期間"
				placeholder="期間を入力"
				value={period}
				onChange={(e) => action.handlePeriod(e.target.value)}
			/>
			<InputForm
				label="曜日"
				placeholder="曜日を入力"
				value={dayOfWeek}
				onChange={(e) => action.handleDayOfWeek(e.target.value)}
			/>
			<InputForm
				label="開始時刻"
				placeholder="開始時刻を入力"
				value={startTime}
				onChange={(e) => action.handleStartTime(e.target.value)}
			/>
			<InputForm
				label="終了時刻"
				placeholder="終了時刻を入力"
				value={endTime}
				onChange={(e) => action.handleEndTime(e.target.value)}
			/>
		</>
	);
};
