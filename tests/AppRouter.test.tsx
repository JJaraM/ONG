import * as React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import AppRouter, { NoMatch } from '../src/app/AppRouter';
import { DashboardRouter } from '../src/app/DashboardRouter';
import { Dashboard } from '../src/app/Dashboard';

import { Home, NoMatch} from '../src/app/home/Home';
import { MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const renderRoutes = path => mount(
  <MemoryRouter initialEntries={[path]}>
    <AppRouter />
  </MemoryRouter>
);

describe('routes using memory router', () => {

  let element;

  beforeEach(() => {
    element = <AppRouter />
  });

  it('renders as expected', () => {
    const component = shallow(element);
    expect(component).toMatchSnapshot();
  });

  it('routes / to home', () => {
    const component = shallow(element);
    expect(component.find('Route[exact=true][path="/"]').first().prop('component')).toBe(Home);
  });

  it('routes /dashboard to DashboardRouter', () => {
    const component = shallow(element);
    expect(component.find('Route[exact=true][path="/dashboard"]').first().prop('component')).toBe(DashboardRouter);
  });

  it('routes /notMatch to notMatch', () => {
    const component = shallow(element);
    expect(component.find('Route[id="noMatch"]').first().prop('component')).toBe(NoMatch);
  });


});
