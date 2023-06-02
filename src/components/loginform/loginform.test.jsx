import { faHomeLgAlt, faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import LoginForm from './loginform'


describe('Login form test', () => {

  test('should render login form', () => {
    render(<LoginForm />);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  })

})
