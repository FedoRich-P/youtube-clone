import { createBrowserRouter } from 'react-router';
import { Home } from '../pages/Home.tsx';
import { Search } from '../pages/Search.tsx';
import { Watch } from '../pages/Watch.tsx';
import { Error } from '../pages/Error.tsx';

export const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/search', Component: Search },
  { path: '/watch/:id', Component: Watch },
  { path: '/*', Component: Error },
]);
