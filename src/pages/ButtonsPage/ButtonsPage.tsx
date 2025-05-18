import styles from './ButtonsPage.module.scss';
import { Button } from '../../components/Button/Button';

const variants = ['primary', 'regular',   'minimal', 'disabled', 'active', 'danger',] as const;

const ButtonsPage = () => {
  return (
    <div className={styles.page}>
      {variants.map((variant) => (
        <div key={variant} className={styles.page__group}>
          <Button variant={variant} label="Label" />
          <Button variant={variant} icon="plus" label="Label" />
          <Button variant={variant} icon="caret" label="Label" />
        </div>
      ))}
    </div>
  );
};

export default ButtonsPage;
