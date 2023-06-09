import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import RestaurantFilter from './Restaurantfilter';

test('should render restaurant filter with the correct fields', () => {
  const { getByPlaceholderText } = render(<RestaurantFilter />);
  expect(getByPlaceholderText('search restaurant')).toBeInTheDocument();
});

test('checks the product alert pops up', () => {
  const { getByRole } = render(<RestaurantFilter />);
  const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Mexican' } });
    expect(inputElement.value).toBe('Mexican');
});
