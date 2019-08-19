import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Controls from './Controls';

describe('<Contorls',() => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

});