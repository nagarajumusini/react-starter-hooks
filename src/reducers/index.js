import userReducer from './user';
import basketReducer from './basket.js';
const rootReducer = (({ user, basket }, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    user: userReducer(user, action),
    basket: basketReducer(basket, action)
  };
});

export default rootReducer;