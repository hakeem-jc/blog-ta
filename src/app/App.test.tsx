import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../common/store';

const providerWrapper = (
  <Provider store={store}>
     <App />
  </Provider>
);

test('smoke test', () => {
  render(providerWrapper);
  const app = screen.getByText(/blogr/i);
  expect(app).toBeInTheDocument();
});
