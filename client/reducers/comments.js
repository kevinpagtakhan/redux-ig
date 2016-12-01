function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          text: action.comment,
          user: action.author
        }
      ]
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
