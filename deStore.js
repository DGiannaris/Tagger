import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//simple reducer
function deStore(state={}, action) {

  switch(action.type) {
    case 'LOGIN':
      return {...state,
        posts: action.payload,
        };
    default:
      return state;
  }
}
export default createStore(deStore,applyMiddleware(thunk));
