import React, { ReactNode } from 'react';
import HomePage from './pages/Home';

interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = () => {
  return <HomePage />;
};

export default App;
