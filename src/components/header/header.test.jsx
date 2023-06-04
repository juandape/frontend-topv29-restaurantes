import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header test', () => {
  test('should render header apropiately', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/restaurant/i)).toBeInTheDocument();
    expect(screen.getByText(/pages/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });
});
