import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FoodTypeFilter from './Foodtypefilter';

describe('Food type filter test', () => {
  test('should render food type filter with the correct fields', async () => {
    const { getByText } = render(<FoodTypeFilter />);
    await waitForElementToBeRemoved(() => getByText('Loading...'))
    expect(getByText('Breakfast')).toBeInTheDocument();
    expect(getByText('Lunch')).toBeInTheDocument();
    expect(getByText('Dinner')).toBeInTheDocument();
    expect(getByText('Fast Food')).toBeInTheDocument();
  });

  test('checks the product alert pops up', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation();
    const { getByText, getByRole } = render(<FoodTypeFilter />);
    await waitForElementToBeRemoved(() => getByText('Loading...'))
    const breakfastBtn = getByRole('button', { name: /breakfast/i });
    //console.log(breakfastBtn);
    fireEvent.click(breakfastBtn);
    expect(alertMock).toHaveBeenCalled();
  });
});
