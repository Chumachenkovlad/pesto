import React from 'react';
import { Route } from 'react-router-dom';

import Header from './shared/components/header/Header';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Route path="/auth" exact render={() => <div></div>} />
        <Route path="/posts" exact render={() => <div></div>} />
        <Route path="/posts/:id" exact render={() => <div></div>} />
        <Route path="/posts/:id/edit" exact render={() => <div></div>} />
        <Route path="/posts/create" exact render={() => <div></div>} />
        <Route path="/profile" exact render={() => <div></div>} />
      </main>
    </div>
  );
};
export default App;
