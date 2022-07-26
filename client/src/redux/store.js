import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

////////// ----- /////////

// import { configureStore } from '@reduxjs/toolkit';

// import cartReducer from './cartRedux';
// import userReducer from './userRedux';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import { storage } from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// export const store = () => {
//   return configureStore({
//     reducer: {
//       cart: cartReducer,
//       user: persistedReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   });
// };

// export let persistor = persistStore(store);

////////// ----- /////////
