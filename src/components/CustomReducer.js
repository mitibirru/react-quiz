function useReducer(reducer, intitialState) {
	let state = intitialState;
	const dispatch = (action) => {
		return reducer(state, action);
	};

	return [state, dispatch];
}
