// import PaintingList from './PaintingList';
// import Section from './Section';
// import paintings from '../paintings.json';
import { PageTitle } from '../PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import upcomingEvents from 'upcoming-events.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Confetence" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
