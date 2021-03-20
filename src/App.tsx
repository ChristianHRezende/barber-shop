import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ProcutsPage from './pages/Products';

interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = () => {
  return (
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
  );
};

export default App;
