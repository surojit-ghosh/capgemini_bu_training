import { screen, render } from '@testing-library/react';
import APICall from './APICall';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'delectus aut autem' }),
  })
);

test('renders API data', async () => {
  render(<APICall />);
  const ele = await screen.findByText('delectus aut autem');
  expect(ele).toBeInTheDocument();
});