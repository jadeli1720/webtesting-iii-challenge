import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashoboard',() => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    //Shows controls
    // it('Dashboard renders <Controls/>', () => {
    //     const { getByText} = render(<Dashboard />)
    //     getByText(/controls/i)
    // })

});

