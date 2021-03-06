export default function posts(state = [], action) {
  switch(action.type){
    case 'INCREMENT_LIKES':
      console.log(state);
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], likes: state[action.index].likes + 1 },
        ...state.slice(action.index + 1)
      ]
      break;
    default:
      return state;
  }
}
