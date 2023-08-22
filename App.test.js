import { render, screen } from '@testing-library/react';
import App from './App';

test('renders train schedule table', () => {
  render(<App />);
  
  const trainNameHeader = screen.getByText(/Train Name/i);
  const departureTimeHeader = screen.getByText(/Departure Time/i);
  const destinationHeader = screen.getByText(/Destination/i);
  
  expect(trainNameHeader).toBeInTheDocument();
  expect(departureTimeHeader).toBeInTheDocument();
  expect(destinationHeader).toBeInTheDocument();
  
});
