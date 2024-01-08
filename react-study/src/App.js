import logo from './logo.svg';
import Composition from './components/2-4.Props/Composition';
import Event from './components/2-7.Event/Event';

import './App.css';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponentInLifeCycle from './components/2-6.Life_Cycle/ClassComponentInLifeCycle';
import Condition from './components/2-8.Conditional_rendering/Condition';
import List from './components/2-9.List/List';
import ControlledComponent from './components/2-10.Form/\bControlledComponent';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      {/* <List />
      <Condition />
      <Event />
      <ClassComponentInLifeCycle />
      <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
