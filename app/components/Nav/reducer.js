import { fromJS } from 'immutable';
import { createStore } from 'redux';

// The initial state of the App
const initialState = fromJS({
  page: null,
  test: 1,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return state.set('page', action.page);
    default:
      return state;
  }
}

const store = createStore(appReducer);

store.dispatch({
  type:'SET_PAGE',
  page: '.page-1'
});

export default store;