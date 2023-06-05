import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FoodTypeFilter from './Foodtypefilter';

describe('Food type filter test', () => {
  test('should render food type filter with the correct fields', () => {
    const { getByText } = render(<FoodTypeFilter />);
    expect(getByText('Breakfast')).toBeInTheDocument();
    expect(getByText('Lunch')).toBeInTheDocument();
    expect(getByText('Dinner')).toBeInTheDocument();
    expect(getByText('Fast Food')).toBeInTheDocument();
  });

  test('checks the product alert pops up', () => {
    ('alerts on submit click', async () => {
      const alertMock = vi.spyOn(window, 'alert').mockImplementation();
      const { getByRole } = render(<FoodTypeFilter />);
      fireEvent.click(getByRole('button'));
      expect(alertMock).toHaveBeenCalledTimes(1);
    })
  })
})
