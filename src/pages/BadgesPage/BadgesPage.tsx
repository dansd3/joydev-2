import { Badge } from '../../components/Badge/Badge';
import styles from './BadgesPage.module.scss';
import { Heading } from '../../components/Heading/Heading';

const colors = ['neutral', 'green', 'blue', 'red', 'orange', 'purple', 'yellow', 'teal'] as const;
const numbers = ['8', '1', '3', '99+', '1', '3', '6', '2'] as const;
const useCases = [
  {
    label: 'beta',
    color: 'neutral',
    description: 'Trial, new, information, help',
  },
  {
    label: 'success',
    color: 'green',
    description: 'Operational, available, done, approved, added',
  },
  {
    label: 'removed',
    color: 'red',
    description: 'Errors, declined, failed, removed, critical',
  },
  {
    label: 'in progress',
    color: 'blue',
    description: 'In progress, open, modified',
  },
  {
    label: 'trail',
    color: 'purple',
    description: 'Trial, new, information, help',
  },
  {
    label: 'moved',
    color: 'yellow',
    description: 'Busy, blocked, missing, warning',
  },
] as const;

const BadgesPage = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <Heading size={100}>Badge Subtle</Heading>
      <div className={styles.row}>
        {colors.map((color) => (
          <Badge color={color} type="subtle" shape="badge">
            {color}
          </Badge>
        ))}
      </div>

      <Heading size={100}>Badge Solid</Heading>
      <div className={styles.row}>
        {colors.map((color) => (
          <Badge color={color} type="solid" shape="badge">
            {color}
          </Badge>
        ))}
      </div>
    </div>
    <div className={styles.container}>
      <Heading size={100}>Pill Subtle</Heading>
      <div className={styles.row}>
        {numbers.map((text, i) => (
          <Badge color={colors[i]} type="subtle" shape="pill">
            {text}
          </Badge>
        ))}
      </div>

      <Heading size={100}>Pill Solid</Heading>
      <div className={styles.row}>
        {numbers.map((text, i) => (
          <Badge color={colors[i]} type="solid" shape="pill">
            {text}
          </Badge>
        ))}
      </div>
    </div>

    <Heading size={100}>Badge Use Cases</Heading>
    <div className={styles.usecases}>
      {useCases.map((item, i) => (
        <div key={i} className={styles.usecases__row}>
          <Badge color={item.color} type="subtle" shape="badge">
            {item.label}
          </Badge>
          <Badge color={item.color} type="solid" shape="badge">
            {item.label}
          </Badge>
          <div className={styles.usecases__text}>{item.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default BadgesPage;
