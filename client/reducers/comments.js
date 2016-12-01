function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          text: action.comment,
          user: action.author
        }
      ];
      break;
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      break;
    default:
      return state;
  }
}

export default function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state;
}
