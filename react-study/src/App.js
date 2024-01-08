import logo from './logo.svg';
import Composition from './components/2-4.Props/Composition';
import './App.css';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponentInLifeCycle from './components/2-6.Life_Cycle/ClassComponentInLifeCycle';

function App() {
  return (
    <div className="App">
      <ClassComponentInLifeCycle />
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
