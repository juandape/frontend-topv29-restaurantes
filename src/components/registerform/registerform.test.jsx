import { render } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import RegisterForm from './Registerform'

describe('Register form test', () => {
  test('should render register form with the correct fields', () => {
    const { getByPlaceholderText } = render(<RegisterForm />);
    expect(getByPlaceholderText(/your fullname/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/email@dot.com/i)).toBeInTheDocument();
    expect(getByPlaceholderText('your password')).toBeInTheDocument();
    expect(getByPlaceholderText(/confirm your password/i)).toBeInTheDocument();
  })
})
