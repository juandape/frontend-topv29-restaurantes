import { render, screen } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import Feedback from './Feedback'

describe('Feedback test', () => {
  test('should render feedback form with the correct fields', () => {
    const { getByPlaceholderText } = render(<Feedback />);
    expect(getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/your feedback/i)).toBeInTheDocument();
  })
})


