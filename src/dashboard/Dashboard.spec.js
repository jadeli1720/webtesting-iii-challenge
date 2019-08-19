import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashoboard',() => {
    
    //shows the controls and display
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

});

