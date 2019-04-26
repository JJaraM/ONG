import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../src/App';
import renderer from 'react-test-renderer';

it('App renders correctly', () => {
  expect(<App />).toMatchSnapshot();
});
