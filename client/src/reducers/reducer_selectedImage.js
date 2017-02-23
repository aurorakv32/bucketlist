
export default function(state = null, action){

	switch(action.type) {
		case 'SELECT_IMAGE':
			return action.payload;
	}
	return state;
}