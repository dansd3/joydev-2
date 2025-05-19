import { Toast } from '../../components/Toast/Toast';
import styles from './ToastsPage.module.scss';

const messages = [
  { title: 'You have successfully enabled Personas.', type: 'success' },
  { title: 'There are over 180 integrations available.', type: 'info' },
  { title: 'Your plan only supports a compute history of 30 days.', type: 'warning' },
  { title: 'We weren’t able to save your changes.', type: 'danger' },
];

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const ToastsPage = () => (
  <div className={styles.page}>
    <div className={styles.page__group}>
      {messages.map((item) => (
        <Toast type={item.type as 'success' | 'info' | 'warning' | 'danger'} title={item.title} />
      ))}
    </div>

    <div className={styles.page__group}>
      {messages.map((item) => (
        <Toast
          type={item.type as 'success' | 'info' | 'warning' | 'danger'}
          title={item.title}
          description={description}
        />
      ))}
    </div>
  </div>
);

export default ToastsPage;
