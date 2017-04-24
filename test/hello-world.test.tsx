import * as React from 'react'
import * as ReactDOM from "react-dom"
import { shallow } from 'enzyme'
import { Hello } from './../src/app/views/hello-world'

describe('Hello World', () => {
  it('should render', () => {
    const wrapper = shallow(<Hello to='you'/>);
    wrapper.find('h1').length.should.equal(1);
  });

  it('should render a "to" prop', () => {
    const wrapper = shallow(<Hello to='you'/>);
    wrapper.text().should.equal('Hello, you!');
  });

  it('should have class .Hello', () => {
    const wrapper = shallow(<Hello to='you'/>);
    wrapper.hasClass('main').should.be.true;
  });
});
