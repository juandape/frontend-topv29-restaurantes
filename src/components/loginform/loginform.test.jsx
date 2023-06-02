import { faHomeLgAlt, faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import LoginForm from './Loginform'


describe('Login form test', () => {

  test('should render login form', () => {
    render(<LoginForm />);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  })

  test('should render email input', () => {
    render(<LoginForm />);
    const linkElement = screen.getByPlaceholderText(/your email/i);
    expect(linkElement).toBeInTheDocument();
  })

  test('should render password input', () => {
    render(<LoginForm />);
    const linkElement = screen.getByPlaceholderText(/your password/i);
    expect(linkElement).toBeInTheDocument();
  })

  test('should render login button', () => {
    render(<LoginForm />);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  })
})
