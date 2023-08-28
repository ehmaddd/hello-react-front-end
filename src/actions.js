// src/actions.js
const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/random_greeting');
    const data = await response.json();
    dispatch({ type: 'SET_GREETING', payload: data.greeting });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};

export default fetchRandomGreeting;
