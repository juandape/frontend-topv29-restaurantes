import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import RestaurantFilter from './Restaurantfilter';

test('should render restaurant filter with the correct fields', () => {
  const { getByPlaceholderText } = render(<RestaurantFilter />);
  expect(getByPlaceholderText('search restaurant')).toBeInTheDocument();
});

test('checks the product alert pops up', () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation();
  const { getByRole } = render(<RestaurantFilter />);
  fireEvent.click(getByRole('button'));
  expect(alertMock).toHaveBeenCalledTimes(1);
});
