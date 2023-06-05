import { describe,test, expect} from 'vitest';
import {render,screen} from '@testing-library/react'
import Star from './Star'
describe('Star', () => {
    test('text star', () => {
     render(<Star />);
     expect(screen.findAllByAltText("the rating is:")).toBeDefined()

     });

    });
