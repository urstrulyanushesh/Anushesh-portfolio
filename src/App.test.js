import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio home page', () => {
  render(<App />);
  expect(screen.getByText(/Anushesh is a/i)).toBeInTheDocument();
  expect(screen.getByText(/#projects/i)).toBeInTheDocument();
});
