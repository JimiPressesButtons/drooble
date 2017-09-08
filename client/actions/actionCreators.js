//add like
export function addLike(index){
	return{
		type:'ADD_LIKES',
		index
	}
}

//add comment
export function addComment(postId, author, comment){
	return{
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}