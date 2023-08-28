// src/reducer.js
const initialState = {
  greeting: '',
};

const reducer = (action, state = initialState) => {
  switch (action.type) {
    case 'SET_GREETING':
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default reducer;
