export type VMModel<State, Action, Argument extends object | void = void> = (
	args: Argument
) => {
	state: State;
	action: Action;
};
