import styles from './ParagraphsPage.module.scss';
import { Heading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const placeholder = `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.`;

const ParagraphsPage = () => {
  return (
    <div className={styles.page}>
      <Heading size={500}>Paragraph / 300</Heading>
      <Paragraph size={300}>{placeholder}</Paragraph>

      <Heading size={500}>Paragraph / 400</Heading>
      <Paragraph size={400}>{placeholder}</Paragraph>

      <Heading size={600}>Paragraph / 500</Heading>
      <Paragraph size={500}>{placeholder}</Paragraph>
    </div>
  );
};

export default ParagraphsPage;
