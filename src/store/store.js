import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { RootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, RootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);
const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composeEnchancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
