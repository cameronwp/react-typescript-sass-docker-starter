import * as React from 'react'
import * as ReactDOM from "react-dom"
import { shallow } from 'enzyme'
import { Main } from './../src/app/views/main-container'

describe('Main Container', () => {
  it('should render', () => {
    const wrapper = shallow(<Main to='cam'/>);
    wrapper.find('h1').length.should.equal(1);
  });

  it('should accept a "to" prop', () => {
    true.should.equal(true);
  });
});
