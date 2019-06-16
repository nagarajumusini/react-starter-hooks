const initialState = {
  items: [{
    id: 1, 
    name: 'laptop'
  }, {
    id: 2, 
    name: 'sofa'
  }, {
    id: 3,
    name: 'phone'
  }]
}
const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'addItem':
        return {
          ...state,
          items: [...state.items, { id: state.items.length + 1, name: action.payload} ]
        };
        
      default:
        return state;
    }
  };
export default basketReducer;
