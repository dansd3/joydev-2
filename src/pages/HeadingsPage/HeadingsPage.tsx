import styles from './HeadingsPage.module.scss';
import { Heading } from '../../components/Heading/Heading';

const headingExamples = [
  { level: 900, label: 'Jumbo Titles. When You Feel Funky' },
  { level: 800, label: 'Oversized Screen Titles' },
  { level: 700, label: 'Empty States and Feature Introductions' },
  { level: 600, label: 'Headings That Identify Key Functionality' },
  { level: 500, label: 'Sub-section and card headings.', showTag: true },
  { level: 400, label: 'Deep headings and for highlighting important pieces of information.' },
  { level: 300, label: 'Heading up a group of list items.' },
  { level: 200, label: 'Low level headings.' },
  { level: 100, label: 'Lowest level headings. Used to group items in a sidebar.' },
];

const HeadingsPage = () => (
  <div className={styles.container}>
    {headingExamples.map(({ level, label, showTag }) => (
      <div key={level} className={styles.row}>
        {showTag && (
          <Heading size={500} className={styles.default}>
            Default
          </Heading>
        )}
        <Heading size={level as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}>
          {' '}
          {level}
        </Heading>
        <Heading size={level as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}>
          {' '}
          {label}{' '}
        </Heading>
      </div>
    ))}
  </div>
);

export default HeadingsPage;
