import { describe,test, expect} from 'vitest';
import {fireEvent, render,screen} from '@testing-library/react'
import Delete from './Delete.jsx'

describe('test tets',()=>{
    beforeEach(()=>{
        render(<Delete />)
    })
    test('test test',()=>{

        expect(1 + 1).toBe(2);
    });
    test(' test Button',()=>{
        const button =screen.getByText(/Delete/i);
        fireEvent.click(button);
        });

});
