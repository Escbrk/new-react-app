import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
  return (
    <>
      <Section title="Week Top">
        <PaintingList items={paintings} />
      </Section>
    </>
  );
}
