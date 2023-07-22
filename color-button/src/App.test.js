import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import {camelCaseLetters} from "./App"

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
  const input = screen.getByRole("checkbox",{name : "Disable"})
  expect(input).not.toBeChecked()
  fireEvent.click(input);
  expect(buttonColor).toBeDisabled()
  expect(buttonColor).toHaveStyle({backgroundColor : "grey"})
  expect(input).toBeChecked();
  fireEvent.click(input)
  expect(buttonColor).toHaveStyle({backgroundColor : "red"})
});

describe('spaces before camelCase letters',()=>{
  test('no inner capital letters',()=>{
    expect(camelCaseLetters('Red')).toBe('Red');
  });
  test('one inner capital letters',()=>{
    expect(camelCaseLetters('MidnightBlue')).toBe('Midnight Blue');
  });
  test('multiple inner capital letters',()=>{
    expect(camelCaseLetters('MediumVioletRed')).toBe('Medium Violet Red');
  });
})