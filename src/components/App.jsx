// import PaintingList from './PaintingList';
// import Section from './Section';
// import paintings from '../paintings.json';
import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

// export default function App() {
//   return (
//     <>
//       <Section title="Week Top">
//         <PaintingList items={paintings} />
//       </Section>
//     </>
//   );
// }

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Confetence" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
