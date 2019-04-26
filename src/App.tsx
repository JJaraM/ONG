import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './app/AppRouter';

export const App: React.StatelessComponent = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

const appElement = document.getElementById('root');
if (appElement) {
  ReactDOM.render(<App/>, appElement);
}
