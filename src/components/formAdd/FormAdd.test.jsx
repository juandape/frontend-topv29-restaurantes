import { describe,test, expect} from 'vitest';
import {fireEvent, render,screen} from '@testing-library/react'
import Addfood from '../formaddfood/Addfood';

describe('test',()=>{
    beforeEach(()=>{
        render(<Addfood />)
    })

    test('rendering test',()=>{
       expect(screen.findAllByAltText(/price/i)).toBeDefined();
       expect(screen.findAllByAltText('name/i')).toBeDefined();
        });
    test('should render the input',()=>{
        expect(screen.findAllByAltText('name/i')).toBeDefined();
        expect(screen.getAllByPlaceholderText('Enter food price')).toBeDefined();

        });



});
