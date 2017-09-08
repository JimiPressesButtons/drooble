function posts(state = [], action){   
	switch(action.type){
		case 'ADD_LIKES':
			const i = action.index;
			return[
				...state.slice(0,i), //before the updated one
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1), //after  the updated one
			]

		default:
			return state;

	}
	return state;
}

export default posts;