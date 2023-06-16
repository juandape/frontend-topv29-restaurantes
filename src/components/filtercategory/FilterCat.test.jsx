import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FilterCat from './FilterCat';

describe('Restaurant category filter test', () => {
  test('should render restaurant category filter with the correct fields', async () => {
    const { getByText } = render(<FilterCat />);
    await waitForElementToBeRemoved(() => getByText('Loading...'))
    expect(getByText('Mexican')).toBeInTheDocument();
    expect(getByText('Fast food')).toBeInTheDocument();
    expect(getByText('Asian')).toBeInTheDocument();
    expect(getByText('Bakeries')).toBeInTheDocument();
    expect(getByText('Italian')).toBeInTheDocument();
    expect(getByText('German')).toBeInTheDocument();
  });

  test('checks the product alert pops up', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation();
    const { getByText, getByRole } = render(<FilterCat />);
    await waitForElementToBeRemoved(() => getByText('Loading...'))
    const mextest = getByRole('button', { cateory: /mexican/i });
    fireEvent.click(mextest);
    expect(alertMock).toHaveBeenCalled();
  });
});
