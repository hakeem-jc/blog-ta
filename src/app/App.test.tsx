import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

// test('create new post', async () => {
//   render(providerWrapper);
//   const new_button = await screen.findByTestId('new_post_button');

//   //Open form modal
//   fireEvent.click(new_button);

//   const title = await screen.findByTestId('title_field');
//   const content = await screen.findByTestId('content_field');
//   const lat = await screen.findByTestId('lat_field');
//   const long = await screen.findByTestId('long_field');
//   const image_url= await screen.findByTestId('image_url_field');

//   // Enter data for a post
//   fireEvent.change(title, {target: {value: 'Madrid'}});
//   fireEvent.change(content, {target: {value: 'Madrid es un municipio y una ciudad de España, con categoría histórica de villa'}});
//   fireEvent.change(lat, {target: {value: '40.41678'}});
//   fireEvent.change(long , {target: {value: '-3.70379'}});
//   fireEvent.change(image_url, {target: {value: 'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg'}});
  
//   // Submit post
//   const submit_button = await screen.findByTestId('post_form_button');
//   fireEvent.click(submit_button);

//   // Expect to find new post in to be on the page
//   const post = await screen.findByTestId('post-22');
//   await waitFor(() =>{expect(post).toBeInTheDocument();});

// });
