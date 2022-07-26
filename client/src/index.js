import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactDOM, render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

//// ---- /////

// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

//// ---- /////

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
