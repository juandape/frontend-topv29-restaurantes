import { describe,test, expect} from 'vitest';
import {fireEvent, render,screen} from '@testing-library/react'
import FormEdit from './Editformrestaurant.jsx'

describe('test tets',()=>{
    beforeEach(()=>{
        render(<FormEdit />)
    })

    test('rendering test',()=>{
       expect(screen.findAllByAltText("Adress/i")).toBeDefined();
       expect(screen.findAllByAltText("Adress/i")).toBeDefined();
       expect(screen.findAllByAltText("Name/i")).toBeDefined();
        });
    test('should render the input',()=>{
        expect(screen.findAllByAltText("Name/i")).toBeDefined();
        expect(screen.getByText('Schedules')).toBeInTheDocument();
    });


});
