import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ProcutsPage from './pages/Products';
import { Provider } from 'react-redux';

import { store } from './redux/store';

interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/products">
            <ProcutsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
