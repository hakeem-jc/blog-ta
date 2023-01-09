import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../common/store';

const providerWrapper = (
  <Provider store={store}>
     <App />
  </Provider>
);

test('smoke test', async () => {
  render(providerWrapper);
  const app = await screen.findByText(/blogr/i);
  expect(app).toBeInTheDocument();
});

test('fetch and show posts', async () => {
  render(providerWrapper);
  const post_one = await screen.findByTestId('post-2');
  const post_two = await screen.findByTestId('post-18');
  expect(post_one).toBeInTheDocument();
  expect(post_two).toBeInTheDocument();
});
