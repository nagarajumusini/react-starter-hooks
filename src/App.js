import React, {Suspense, useContext, useEffect} from 'react';
import './App.css';

import ErrorBoundary from './ErrorBoundary'
import Navigation from './Navigation';
import { StateProvider } from './state';
import rootReducer from './reducers';

const App = () => {

  return (
    <StateProvider initialState={{}} reducer={rootReducer}>
        <ErrorBoundary >
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
          </Suspense>
        </ErrorBoundary>
    </StateProvider>
  );
}

export default App;