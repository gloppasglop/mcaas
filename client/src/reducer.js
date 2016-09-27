
const defaultState = {
	containers: [
		{
			Names: ['container1'],
			State: 'running',
			Id: 'this-is-a-dummy-id-1'
		},
		{
			Names: ['container2'],
			State: 'stopped',
			Id: 'this-is-a-dummy-id-2'
		},
	],
	selectedContainer: {}
}

export default function containers(state = defaultState, action) {
  switch(action.type) {
  	case 'TEST':
  		console.log(state,action);
  		return state;
  	case 'SELECT_CONTAINER':
  		console.log('Selected container: ' , action.container);
  		return {...state, selectedContainer: action.container};
  	default:
  		return state;
  }
}