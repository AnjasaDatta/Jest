import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const buttonColor = screen.getByRole('button', { name: "Change to blue" });
  expect(buttonColor).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(buttonColor)
  expect(buttonColor).toHaveStyle({backgroundColor : 'blue'})
  expect(buttonColor).toHaveTextContent('Change to red')
});
test('Initial Condition and when clicked', () => {
  render(<App />)
  const buttonColor = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonColor).toBeEnabled()
  const input = screen.getByRole("checkbox")
  expect(input).not.toBeChecked()
  fireEvent.click(input);
  expect(buttonColor).toBeDisabled()
  expect(input).toBeChecked()
});

