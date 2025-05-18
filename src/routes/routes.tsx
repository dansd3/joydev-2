import WelcomePage from '../pages/WelcomePage/WelcomePage';
import HeadingsPage from '../pages/HeadingsPage/HeadingsPage';
import TextPage from '../pages/TextsPage/TextsPage';
import ParagraphsPage from '../pages/ParagraphsPage/ParagraphsPage';
import ButtonsPage from '../pages/ButtonsPage/ButtonsPage';

export const routes = [
  { path: '/', label: 'Приветствие', element: <WelcomePage /> },
  { path: '/headings', label: 'Headings', element: <HeadingsPage /> },
  { path: '/text', label: 'Texts', element: <TextPage /> },
  { path: '/paragraphs', label: 'Paragraphs', element: <ParagraphsPage /> },
  { path: '/buttons', label: 'Buttons', element: <ButtonsPage /> },
];
