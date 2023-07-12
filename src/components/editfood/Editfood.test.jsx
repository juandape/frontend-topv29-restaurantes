import { describe,test, expect} from 'vitest';
import {fireEvent, render,screen} from '@testing-library/react'
import Formularioedit from './Editfood';

describe('test',()=>{
    beforeEach(()=>{
        render(<Formularioedit />)
    })

    test('rendering test',()=>{
       expect(screen.findAllByAltText("price/i")).toBeDefined();
       expect(screen.findAllByAltText("name/i")).toBeDefined();
        });
    test('should render the input',()=>{
        expect(screen.findAllByAltText("name/i")).toBeDefined();
        expect(screen.getByText('rate')).toBeInTheDocument();
    });


});
