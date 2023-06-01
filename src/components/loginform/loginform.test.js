import { render } from '@testing-library/react';
import LoginForm, { defaultFormValues } from './Loginform';

test('Should render login form', () => {
  render(<LoginForm />);
  const loginForm = 'some text'
  expect(loginForm).toBe(true);
});
