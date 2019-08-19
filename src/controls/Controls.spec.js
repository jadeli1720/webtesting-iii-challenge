import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

describe('<Contorls',() => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    /* 
    - provide buttons to toggle the `closed` and `locked` states.
    - buttons' text changes to reflect the state the door will be in 
    */
    it('when button fires, toggle locked is called', () => {
        const mockClosed = jest.fn();
        const { getByText } = render(<Controls 
            toggleLocked={mockClosed} locked={true} closed={true}/>);
        fireEvent.click(getByText('Unlock Gate'));
        expect(mockClosed).toHaveBeenCalled();
    });

    it('when button fires, toggle closed is called', () => {
        const mockClosed = jest.fn();
        const { getByText } = render(<Controls 
            toggleClosed={mockClosed} locked={false} closed={false}/>);
        fireEvent.click(getByText('Close Gate'));
        expect(mockClosed).toHaveBeenCalled();
    })
});