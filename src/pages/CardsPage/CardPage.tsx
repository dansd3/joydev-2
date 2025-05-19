import styles from './CardsPage.module.scss';
import { Card } from '../../components/Card/Card';

const cards = [
  { elevation: 0, title: 'Card / Elevation 0', description: 'Flat Cards' },
  { elevation: 1, title: 'Card / Elevation 1', description: 'Floating Cards' },
  { elevation: 2, title: 'Card / Elevation 2', description: 'Inline dialogs and dropdowns' },
  { elevation: 3, title: 'Card / Elevation 3', description: 'Dialogs' },
];

const CardsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.page__grid}>
        {cards.map((card) => (
          <Card
            key={card.elevation}
            elevation={card.elevation as 0 | 1 | 2 | 3}
            className={styles.page__element}
          >
            <h1 className={styles.page__title}>{card.title}</h1>
            <p className={styles.page__desc}>{card.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
