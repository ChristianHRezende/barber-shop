import React, { ReactNode } from 'react';

interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <header>
        <p>Hello</p>
      </header>
    </div>
  );
};

export default App;
