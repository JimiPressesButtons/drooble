function comments(state = [], action){   //es6 empty paras
	if(typeof action.postId!== 'undefined'){
		return{
			...state,
			[action.postId]: postComments(state[action.postId],action)
		}
	}
	return state;
}

function postComments(state = [], action){   
	switch(action.type){
		case 'ADD_COMMENT':
			return[...state,{
				user: action.author,
				text: action.comment
			}];
		default:
			return state;
	}

	return state;
}

export default comments;