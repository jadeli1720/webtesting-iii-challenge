import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display',() => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should display unlocked', () => {
        const { queryByText } = render(<Display/>);
        expect(queryByText(/unlocked/i)).toBeTruthy();
    })
    it('should display open', () => {
        const { queryByText } = render(<Display/>);
        expect(queryByText(/open/i)).toBeTruthy();
    })
});