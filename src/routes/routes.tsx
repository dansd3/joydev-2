import WelcomePage from '../pages/WelcomePage/WelcomePage';
import HeadingsPage from '../pages/HeadingsPage/HeadingsPage';
import TextPage from '../pages/TextsPage/TextsPage';

export const routes = [
  { path: '/', label: 'Приветствие', element: <WelcomePage /> },
  { path: '/headings', label: 'Headings', element: <HeadingsPage /> },
  { path: '/text', label: 'Texts', element: <TextPage /> },
];
