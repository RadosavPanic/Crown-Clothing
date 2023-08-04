import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { RootReducer } from "./root-reducer";

const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action);
  }

  console.log(`type: `, action.type);
  console.log(`payload: `, action.payload);
  console.log(`currentState: `, store.getState());

  next(action);
  console.log(`next state: `, store.getState());
};

const middleWares = [loggerMiddleware];
const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(RootReducer, undefined, composeEnchancers);
