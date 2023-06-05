import { render, screen } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import LoginForm from './Loginform'


describe('Login form test', () => {
  test('should render login form with the correct fields', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/your password/i)).toBeInTheDocument();
  })
})

