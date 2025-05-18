import styles from './TextsPage.module.scss';
import { Text } from '../../components/Text/Text';

const textGroups = [
  {
    size: 300,
    items: [
      { label: 'Text / 300 / Default', weight: 'default' },
      { label: 'Text / 300 / Medium', weight: 'medium' },
      { label: 'Text / 300 / Semibold', weight: 'semibold' },
    ],
  },
  {
    size: 400,
    items: [
      { label: 'Text / 400 / Default', weight: 'default', showTag: true },
      { label: 'Text / 400 / Medium', weight: 'medium' },
      { label: 'Text / 400 / Semibold', weight: 'semibold' },
    ],
  },
  {
    size: 500,
    items: [
      { label: 'Text / 500 / Default', weight: 'default' },
      { label: 'Text / 500 / Medium', weight: 'medium' },
      { label: 'Text / 500 / Semibold', weight: 'semibold' },
    ],
  },
];

const links = [
  { label: 'Link / 300', size: 300 },
  { label: 'Link / 400', size: 400 },
  { label: 'Link / 500', size: 500 },
];

const TextsPage = () => {
  return (
    <div className={styles.texts}>
      <div className={styles.texts__groups}>
        {textGroups.map(({ size, items }) => (
          <div key={size} className={styles.texts__block}>
            {items.map(({ label, weight, showTag }) => (
              <div key={label} className={styles.texts__row}>
                {showTag && (
                  <Text className={styles.texts__default}>Default</Text>
                )}
                <Text
                  size={size as 300 | 400 | 500}
                  weight={weight as any}
                >
                  {label}
                </Text>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.texts__links}>
        {links.map(({ label, size }) => (
          <div key={label} className={styles.texts__row}>
            <Text size={size as 300 | 400 | 500} isLink>
              {label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextsPage;
