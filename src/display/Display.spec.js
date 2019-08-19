import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display',() => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    //defaults to `unlocked` and `open`
    it('should display unlocked', () => {
        const { queryByText } = render(<Display/>);
        expect(queryByText(/unlocked/i)).toBeTruthy();
    })
    it('should display open', () => {
        const { queryByText } = render(<Display/>);
        expect(queryByText(/open/i)).toBeTruthy();
    })

    //- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
    //- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
    it('closed and locked should equal false', () => {
        const { queryByText } = render(<Display closed={true} locked={true}/>);
        expect(queryByText(/locked/i)).toBeTruthy();
        expect(queryByText(/close/i)).toBeTruthy();
    })
    
   
    // when `locked` or `closed` use the `red-led` class
    it('if locked or closed the class "red-led" should toggle', () => {
        const { queryAllByTestId } = render(<Display 
                closed={true} locked={true} />);
        expect(queryAllByTestId('led red-led')).toBeTruthy();

    })
    // when `unlocked` or `open` use the `green-led` class
    it('if locked or closed the class "green-led" should toggle', () => {
        const { queryAllByTestId } = render(<Display 
                closed={false} locked={false} />);
        expect(queryAllByTestId('led green-led')).toBeTruthy();
    })

});