import { describe,test, expect} from 'vitest';
import {fireEvent, render,screen} from '@testing-library/react'
import FormAdd from './FormAdd.jsx'

describe('test tets',()=>{
    beforeEach(()=>{
        render(<FormAdd />)
    })

    test('rendering test',()=>{
       expect(screen.findAllByAltText(/Adress/i)).toBeDefined();
       expect(screen.findAllByAltText('Name/i')).toBeDefined();
        });
    test('should render the input',()=>{
        expect(screen.findAllByAltText('Name/i')).toBeDefined();
        expect(screen.getAllByPlaceholderText('Enter the address of the restaurant')).toBeDefined();

        });



});
