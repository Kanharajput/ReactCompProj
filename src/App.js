import Intro from './components/Intro';
import Concepts from './components/ConceptComp/Concepts';
import ComponentImg from './assets/images/components.png';
import EventImg from './assets/images/events.png';
import StateImg from './assets/images/state.png';

function App() {
  const concepts = [
    {
      title: 'Components',
      image: {ComponentImg},
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'State',
      image: {StateImg},
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      title: 'Events',
      image: {EventImg},
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
  ];
  return (
    <div className="root_component">
    <Intro />
    <Concepts concepts={concepts}/>
    </div>
  );
}

export default App;
