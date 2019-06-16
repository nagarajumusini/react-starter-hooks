const initialState = {
    name: 'nagaraju',
    age: '26',
    place: 'warangal'
  }
const userReducer = (state=initialState, action) => {
    switch (action.type) {
      case 'changeName':
        return {
          ...state,
          name: action.payload
        };
        
      default:
        return state;
    }
  };
export default userReducer;
